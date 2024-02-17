import { ActivityIndicator, FlatList, View, StyleSheet, Picker } from 'react-native';
import RepositoryItem from './RepositoryItem'
import useRepositories from '../hooks/useRepositories'
import Text from './Text';
import { useState } from 'react'

const styles = StyleSheet.create({
    separator: {
        height: 10,
    },
    centered: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    errorText: {
        textAlign: 'center',
        marginBottom: 10,
    },
    retryButton: {
        backgroundColor: '#0366d6',
        padding: 10,
        borderRadius: 5,
    },
    retryButtonText: {
        color: 'white',
        textAlign: 'center',
    },
    picker: {
        margin: 10,
    },
});


const RepositoryList = () => {
    const [sort, setSort] = useState('latest');
    const [orderBy, setOrderBy] = useState('CREATED_AT');
    const [orderDirection, setOrderDirection] = useState('DESC');
    const { repositories, loading, error, refetch } = useRepositories(orderBy, orderDirection);
    console.log("🚀 ~ RepositoryList ~ loading:", loading)
    console.log("🚀 ~ RepositoryList ~ repositories:", repositories)
    console.log("🚀 ~ RepositoryList ~ error:", error)

    // Function to handle the picker selection
    const handleSortChange = (selectedSort) => {
        setSort(selectedSort); // Update the picker's selected value state
        if (selectedSort === 'latest') {
            setOrderBy('CREATED_AT');
            setOrderDirection('DESC');
        } else if (selectedSort === 'highestRated') {
            setOrderBy('RATING_AVERAGE');
            setOrderDirection('DESC');
        } else if (selectedSort === 'lowestRated') {
            setOrderBy('RATING_AVERAGE');
            setOrderDirection('ASC');
        }
    };


    const renderItem = ({ item }) => <RepositoryItem item={item} />;

    const renderHeader = () => {
        return (
            <View style={styles.picker}>
                <Picker
                    selectedValue={sort}
                    onValueChange={(itemValue) => {
                        handleSortChange(itemValue)
                    }}>
                    <Picker.Item label="Latest repositories" value="latest" />
                    <Picker.Item label="Highest rated repositories" value="highestRated" />
                    <Picker.Item label="Lowest rated repositories" value="lowestRated" />
                </Picker>
            </View>
        );
    };

    if (loading) {
        return (
            <View style={styles.centered}>
                <ActivityIndicator size="large" color="#0000ff" />
            </View>
        );
    }

    if (error) {
        return (
            <View style={styles.centered}>
                <Text style={styles.errorText}>Failed to load repositories. Please try again.</Text>
            </View>
        );
    }

    return (
        <FlatList
            data={repositories}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            ListHeaderComponent={renderHeader}
        />
    );
};

export default RepositoryList;