import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const reviewStyles = StyleSheet.create({
    container: {
        padding: 10,
        backgroundColor: '#f0f0f0',
        borderRadius: 5,
        marginVertical: 5,
    },
    text: {
        marginBottom: 5,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 5,
    },
    rating: {
        fontWeight: 'bold',
    },
    date: {
        color: '#787878',
    },
});

const formatDate = (dateString) => {
    const date = new Date(dateString);
    return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
};

const ReviewItem = ({ review }) => {
    return (
        <View style={reviewStyles.container}>
            <View style={reviewStyles.header}>
                <Text style={reviewStyles.rating}>Rating: {review.rating}</Text>
                <Text style={reviewStyles.date}>{formatDate(review.createdAt)}</Text>
            </View>
            <Text style={reviewStyles.text}>{review.text}</Text>
            <Text>Reviewer: {review.user.username}</Text>
        </View>
    );
};

export default ReviewItem;
