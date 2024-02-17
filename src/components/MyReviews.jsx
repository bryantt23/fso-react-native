import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import useMe from '../hooks/useMe'; // import your useMe hook

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
    reviewText: {
        fontSize: 16,
        marginBottom: 5,
    },
    reviewRating: {
        fontWeight: 'bold',
    },
    reviewDate: {
        color: 'gray',
        fontSize: 14,
    },
});

const ReviewItem = ({ review }) => {
    console.log("🚀 ~ ReviewItem ~ review:", review)
    return (
        <View style={styles.reviewItem}>
            <Text style={styles.reviewRating}> {review.repository.fullName}</Text>
            <Text style={styles.reviewRating}>Rating: {review.rating}</Text>
            <Text style={styles.reviewText}>{review.text}</Text>
            <Text style={styles.reviewDate}>{new Date(review.createdAt).toLocaleDateString()}</Text>
        </View>
    );
};

const MyReviews = () => {
    const { reviews, loading, error } = useMe();

    if (loading) {
        return <Text>Loading reviews...</Text>;
    }

    if (error) {
        return <Text>An error occurred: {error.message}</Text>;
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={reviews}
                renderItem={({ item }) => <ReviewItem review={item} />}
                keyExtractor={(item) => item.id}
            />
        </View>
    );
};

export default MyReviews;
