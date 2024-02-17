// RepositoryListResults.js
import React from 'react';
import { FlatList, View, StyleSheet, Text } from 'react-native';
import RepositoryItem from './RepositoryItem';

const styles = StyleSheet.create({
    separator: {
        height: 10,
    },
});

const ItemSeparator = () => <View style={styles.separator} />;

const RepositoryListResults = ({ repositories }) => {
    return (
        <FlatList
            data={repositories}
            renderItem={({ item }) => <RepositoryItem item={item} />}
            keyExtractor={(item) => item.id.toString()}
            ItemSeparatorComponent={ItemSeparator}
        />
    );
};

export default RepositoryListResults;
