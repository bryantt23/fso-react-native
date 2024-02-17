// RepositoryListHeader.js
import React from 'react';
import { Picker, TextInput, View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
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

const RepositoryListHeader = ({ sort, onSortChange, onSearchKeywordChange, searchKeyword }) => {
    return (
        <View style={styles.picker}>
            <Picker selectedValue={sort} onValueChange={onSortChange}>
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
};

export default RepositoryListHeader;
