import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const reviewStyles = StyleSheet.create({
    container: {
        backgroundColor: '#ffffff',
        padding: 10,
        marginTop: 10,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#e1e4e8',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    rating: {
        width: 40,
        height: 40,
        borderRadius: 20,
        borderColor: '#0366d6',
        borderWidth: 2,
        justifyContent: 'center',
        alignItems: 'center',
    },
    ratingText: {
        color: '#0366d6',
        fontWeight: 'bold',
    },
    username: {
        fontWeight: 'bold',
        marginBottom: 5,
    },
    date: {
        color: '#586069',
    },
    reviewText: {
        color: '#24292e',
    },
});

const ReviewItem = ({ review }) => {
    // Format date to a more human-readable form
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();
        const month = date.getMonth() < 9 ? `0${date.getMonth() + 1}` : date.getMonth() + 1; // JS months are 0-indexed
        const year = date.getFullYear();
        return `${day}.${month}.${year}`;
    };

    return (
        <View style={reviewStyles.container}>
            <View style={reviewStyles.header}>
                <View style={reviewStyles.rating}>
                    <Text style={reviewStyles.ratingText}>{review.rating}</Text>
                </View>
                <View>
                    <Text style={reviewStyles.date}>{formatDate(review.createdAt)}</Text>
                    <Text style={reviewStyles.username}>{review.user.username}</Text>
                </View>
            </View>
            <Text style={reviewStyles.reviewText}>{review.text}</Text>
        </View>
    );
};

export default ReviewItem;
