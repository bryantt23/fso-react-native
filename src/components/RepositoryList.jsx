import React, { useState, useCallback } from 'react';
import { ActivityIndicator, FlatList, View, StyleSheet, Picker, TextInput } from 'react-native';
import RepositoryItem from './RepositoryItem';
import useRepositories from '../hooks/useRepositories';
import Text from './Text';

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
    input: {
        borderColor: 'gray',
        borderWidth: 1,
        padding: 10,
        marginBottom: 10,
        borderRadius: 5,
    },
});

const RepositoryListHeader = React.memo(({ sort, onSortChange, onSearchKeywordChange, searchKeyword }) => {
    return (
        <View style={styles.picker}>
            <Picker
                selectedValue={sort}
                onValueChange={onSortChange}>
                <Picker.Item label="Latest repositories" value="latest" />
                <Picker.Item label="Highest rated repositories" value="highestRated" />
                <Picker.Item label="Lowest rated repositories" value="lowestRated" />
            </Picker>
            <TextInput
                onChangeText={onSearchKeywordChange}
                value={searchKeyword}
                style={styles.input}
                placeholder="Search for repositories"
            />
        </View>
    );
});

const RepositoryList = () => {
    const [sort, setSort] = useState('latest');
    const [orderBy, setOrderBy] = useState('CREATED_AT');
    const [orderDirection, setOrderDirection] = useState('DESC');
    const [searchKeyword, setSearchKeyword] = useState('');

    const handleSortChange = useCallback((selectedSort) => {
        setSort(selectedSort);
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
    }, []);

    const handleSearchKeywordChange = useCallback((value) => {
        setSearchKeyword(value);
    }, []);

    const { repositories, loading, error } = useRepositories(orderBy, orderDirection, searchKeyword);

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
            renderItem={({ item }) => <RepositoryItem item={item} />}
            keyExtractor={item => item.id}
            ListHeaderComponent={() => (
                <RepositoryListHeader
                    sort={sort}
                    onSortChange={handleSortChange}
                    onSearchKeywordChange={handleSearchKeywordChange}
                    searchKeyword={searchKeyword}
                />
            )}
            ItemSeparatorComponent={() => <View style={styles.separator} />}
        />
    );
};

export default RepositoryList;
