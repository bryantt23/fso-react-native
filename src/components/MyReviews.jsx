import React from 'react';
import { ActivityIndicator, TouchableOpacity, View, Text, FlatList, Linking, StyleSheet, Alert } from 'react-native';
import useMe from '../hooks/useMe'; // make sure to import your useMe hook correctly
import useDeleteReview from '../hooks/useDeleteReview';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
    },
    reviewItem: {
        backgroundColor: 'white',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius: 5,
        elevation: 1, // for Android shadow
        shadowColor: '#000', // for iOS shadow
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
    },
    reviewHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    reviewRatingContainer: {
        width: 50,
        height: 50,
        borderRadius: 25,
        borderWidth: 2,
        borderColor: '#0366d6',
        alignItems: 'center',
        justifyContent: 'center',
    },
    reviewRating: {
        fontWeight: 'bold',
        color: '#0366d6',
    },
    reviewDate: {
        color: 'gray',
        fontSize: 14,
    },
    reviewText: {
        fontSize: 16,
        color: 'black',
    }, button: {
        marginTop: 10,
        borderRadius: 5,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
    },
    viewButton: {
        backgroundColor: '#0366d6', // blue color
    },
    deleteButton: {
        backgroundColor: '#d73a4a', // red color
    },
    // Add style for centered content
    centered: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    errorText: {
        color: 'red',
    },
});

const ReviewItem = ({ review }) => {
    const reviewDate = new Date(review.createdAt).toLocaleDateString();
    const [deleteReview] = useDeleteReview();

    const handleDelete = () => {
        deleteReview(review.id); // Call deleteReview with the id of the review
    };

    const openInGitHub = () => {
        Linking.openURL(review.repository.url);
    };

    return (
        <View style={styles.reviewItem}>
            <View style={styles.reviewHeader}>
                <View style={styles.reviewRatingContainer}>
                    <Text style={styles.reviewRating}>{review.rating}</Text>
                </View>
                <Text style={styles.reviewDate}>{reviewDate}</Text>
            </View>
            <Text style={styles.reviewText}>{review.text}</Text>
            <TouchableOpacity style={[styles.button, styles.viewButton]} onPress={openInGitHub}>
                <Text style={styles.buttonText}>View Repository</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button, styles.deleteButton]} onPress={handleDelete}>
                <Text style={styles.buttonText}>Delete Review</Text>
            </TouchableOpacity>
        </View>
    );
};


const MyReviews = () => {
    const { reviews, loading, error, fetchMore } = useMe();

    if (loading) {
        return <View style={styles.centered}><ActivityIndicator size="large" /></View>;
    }

    if (error) {
        return <View style={styles.centered}><Text style={styles.errorText}>{error.message}</Text></View>;
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={reviews}
                renderItem={({ item }) => <ReviewItem review={item} />}
                keyExtractor={item => item.id.toString()}
                onEndReached={fetchMore}
                onEndReachedThreshold={0.5} // Fetch more items when half of the list is displayed
                ListFooterComponent={loading ? <ActivityIndicator size="small" /> : null}
            />
        </View>
    );
};

export default MyReviews;