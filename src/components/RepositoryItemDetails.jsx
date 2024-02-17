import React from 'react';
import { View, TouchableOpacity, StyleSheet, Linking, FlatList } from 'react-native';
import Text from './Text';
import { useParams } from 'react-router-native';
import useRepository from '../hooks/useRepository';
import RepositoryItem from './RepositoryItem';
import ReviewItem from './ReviewItem';

const styles = StyleSheet.create({
    container: {
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
    headerContainer: {
        marginBottom: 20, // Add some spacing between the header and the list items if needed
    },
});

const RepositoryItemDetails = () => {
    const { id } = useParams();
    const { data, loading, error } = useRepository(id);

    if (loading) return <Text>Loading...</Text>;
    if (error) return <Text>Error: {error.message}</Text>;

    const item = data;
    const reviews = item?.reviews?.edges.map(edge => edge.node) || [];

    const openInGitHub = () => {
        Linking.openURL(item.url);
    };

    return (
        <View style={styles.container} testID="RepositoryItemDetails">
            <FlatList
                data={reviews}
                renderItem={({ item }) => <ReviewItem review={item} />}
                keyExtractor={({ id }) => id}
                ListHeaderComponent={() => (
                    <View style={styles.headerContainer}>
                        <RepositoryItem item={item} />
                        <TouchableOpacity style={styles.button} onPress={openInGitHub}>
                            <Text style={styles.buttonText}>Open in GitHub</Text>
                        </TouchableOpacity>
                    </View>
                )}
            />
        </View>
    );
};

export default RepositoryItemDetails;
