import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import useMe from '../hooks/useMe'; // make sure to import your useMe hook correctly

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
    },
});

const ReviewItem = ({ review }) => {
    // Convert date string to a Date object
    const reviewDate = new Date(review.createdAt).toLocaleDateString();

    return (
        <View style={styles.reviewItem}>
            <View style={styles.reviewHeader}>
                <Text style={styles.reviewRating}> {review.repository.fullName}</Text>
                <View style={styles.reviewRatingContainer}>
                    <Text style={styles.reviewRating}>{review.rating}</Text>
                </View>
                <Text style={styles.reviewDate}>{reviewDate}</Text>
            </View>
            <Text style={styles.reviewText}>{review.text}</Text>
        </View>
    );
};

const MyReviews = () => {
    const { reviews, loading, error } = useMe();

    if (loading) {
        return <View style={styles.centered}><Text>Loading reviews...</Text></View>;
    }

    if (error) {
        return <View style={styles.centered}><Text>An error occurred: {error.message}</Text></View>;
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
