// RepositoryList.js
import React, { useState, useCallback } from 'react';
import { View, StyleSheet, ActivityIndicator, Text } from 'react-native';
import RepositoryListHeader from './RepositoryListHeader';
import RepositoryListResults from './RepositoryListResults';
import useRepositories from '../hooks/useRepositories';

const styles = StyleSheet.create({
    container: {
        flex: 1,
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
});

const RepositoryList = () => {
    const [sort, setSort] = useState('latest');
    const [orderBy, setOrderBy] = useState('CREATED_AT');
    const [orderDirection, setOrderDirection] = useState('DESC');
    const [searchKeyword, setSearchKeyword] = useState('');

    const { repositories, loading, error } = useRepositories(orderBy, orderDirection, searchKeyword);
    console.log("🚀 ~ RepositoryList ~ repositories:", repositories)

    const handleSortChange = useCallback((selectedSort) => {
        setSort(selectedSort);
        switch (selectedSort) {
            case 'latest':
                setOrderBy('CREATED_AT');
                setOrderDirection('DESC');
                break;
            case 'highestRated':
                setOrderBy('RATING_AVERAGE');
                setOrderDirection('DESC');
                break;
            case 'lowestRated':
                setOrderBy('RATING_AVERAGE');
                setOrderDirection('ASC');
                break;
            default:
                setOrderBy('CREATED_AT');
                setOrderDirection('DESC');
        }
    }, []);

    const handleSearchKeywordChange = useCallback((value) => {
        setSearchKeyword(value);
    }, []);

    if (error) {
        return (
            <View style={styles.centered}>
                <Text style={styles.errorText}>Failed to load repositories. Please try again.</Text>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <RepositoryListHeader
                sort={sort}
                onSortChange={handleSortChange}
                onSearchKeywordChange={handleSearchKeywordChange}
                searchKeyword={searchKeyword}
            />
            {loading ? <View style={styles.centered}>
                <ActivityIndicator size="large" color="#0000ff" />
            </View> : repositories.length === 0 ? <View style={styles.centered}>
                <Text >No results</Text>
            </View> : <RepositoryListResults
                repositories={repositories}
            />}
        </View>
    );
};

export default RepositoryList;
