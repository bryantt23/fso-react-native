import { View, Text, Image, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: 'white',
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
        backgroundColor: '#0366d6',
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
    return (
        <View style={styles.container}>
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
                    <Text style={styles.statCount}>{item.stargazersCount}</Text>
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
    );
};

export default RepositoryItem;
