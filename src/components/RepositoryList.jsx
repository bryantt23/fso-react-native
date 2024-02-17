import { ActivityIndicator, FlatList, View, StyleSheet } from 'react-native';
import RepositoryItem from './RepositoryItem'
import useRepositories from '../hooks/useRepositories'
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
});

const ItemSeparator = () => <View style={styles.separator} />;

const RepositoryList = () => {
    const { loading, error, repositories } = useRepositories();
    console.log("🚀 ~ RepositoryList ~ loading:", loading)
    console.log("🚀 ~ RepositoryList ~ repositories:", repositories)
    console.log("🚀 ~ RepositoryList ~ error:", error)

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
            ItemSeparatorComponent={ItemSeparator}
            renderItem={({ item, index, separators }) => (
                <RepositoryItem item={item} index={index} separators={separators} />
            )}
        />
    );
};

export default RepositoryList;