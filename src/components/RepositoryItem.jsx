import React from 'react';
import { Platform, View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Text from './Text';
import { Link } from 'react-router-native';

const styles = StyleSheet.create({
    // Styles remain mostly unchanged, just add the border to the container style
    container: {
        padding: 20,
        backgroundColor: 'white',
        borderWidth: 1, // Added border width
        borderColor: '#ccc', // Added border color
        borderRadius: 5, // Optional: added border radius
    },
    topContainer: {
        flexDirection: 'row',
        marginBottom: 10,
    },
    avatar: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 10,
    },
    language: {
        backgroundColor: Platform.select({
            android: 'orange', // Orange background for Android
            ios: '#0366d6', // Original blue color for iOS
            default: '#0366d6', // Default to blue for other platforms
        }),
        color: 'white',
        padding: 5,
        borderRadius: 5,
        alignSelf: 'flex-start',
    },
    statsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 10,
    },
    stat: {
        alignItems: 'center',
    },
    statCount: {
        fontWeight: 'bold',
    },
});

const RepositoryItem = ({ item }) => {
    if (!item) {
        return null;
    }
    console.log("🚀 ~ RepositoryItem ~ item:", item)

    const starsCount = (stars) => {
        if (stars < 1000) {
            return stars.toString();
        }

        const thousands = parseInt(stars / 1000);
        const remainder = stars % 1000;
        if (remainder === 0) {
            return `${thousands}k`; // Return without decimal place if it's an exact multiple of 1000
        }

        const decimal = parseInt(remainder / 100);
        return `${thousands}.${decimal}k`;
    };

    return (
        <Link to={`/${item.id}`} component={TouchableOpacity} underlayColor="#f0f4f7">
            <View style={styles.container} testID="repositoryItem" >
                <View style={styles.topContainer}>
                    <Image style={styles.avatar} source={{ uri: item.ownerAvatarUrl }} />
                    <View>
                        <Text>{item.fullName}</Text>
                        <Text>{item.description}</Text>
                        {item.language && <Text style={styles.language}>{item.language}</Text>}
                    </View>
                </View>
                <View style={styles.statsContainer}>
                    <View style={styles.stat}>
                        <Text style={styles.statCount}>{starsCount(item.stargazersCount)}</Text>
                        <Text>Stars</Text>
                    </View>
                    <View style={styles.stat}>
                        <Text style={styles.statCount}>{item.forksCount}</Text>
                        <Text>Forks</Text>
                    </View>
                    <View style={styles.stat}>
                        <Text style={styles.statCount}>{item.reviewCount}</Text>
                        <Text>Reviews</Text>
                    </View>
                    <View style={styles.stat}>
                        <Text style={styles.statCount}>{item.ratingAverage}</Text>
                        <Text>Rating</Text>
                    </View>
                </View>
            </View>
        </Link>
    );
};

export default RepositoryItem;
