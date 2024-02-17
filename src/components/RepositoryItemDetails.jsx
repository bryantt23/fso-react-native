import React from 'react';
import { View, TouchableOpacity, StyleSheet, Linking } from 'react-native';
import Text from './Text';
import { useParams } from 'react-router-native';
import useRepository from '../hooks/useRepository';
import RepositoryItem from './RepositoryItem';

const styles = StyleSheet.create({
    container: {
        // Define your styles here
        padding: 20,
    },
    button: {
        backgroundColor: '#0366d6', // GitHub blue
        padding: 10,
        marginTop: 10,
        alignItems: 'center',
        borderRadius: 5,
    },
    buttonText: {
        color: '#ffffff',
        fontWeight: 'bold',
    },
});

const RepositoryItemDetails = () => {
    const { id } = useParams();
    const { data, loading, error } = useRepository(id);

    if (loading) return <Text>Loading...</Text>;
    if (error) return <Text>Error: {error.message}</Text>;

    const item = data;

    const openInGitHub = () => {
        Linking.openURL(item.url);
    };

    return (
        <View style={styles.container} testID="RepositoryItemDetails">
            {item && <RepositoryItem item={item} />}
            <TouchableOpacity style={styles.button} onPress={openInGitHub}>
                <Text style={styles.buttonText}>Open in GitHub</Text>
            </TouchableOpacity>
        </View>
    );
};

export default RepositoryItemDetails;
