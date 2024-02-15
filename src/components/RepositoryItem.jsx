import { Text, StyleSheet } from 'react-native';
const styles = StyleSheet.create({
    separator: {
        height: 10,
    },
});

const RepositoryItem = ({ item }) => {
    console.log('RepositoryItem')
    return (
        <Text>{JSON.stringify(item)}</Text>
    );
};

export default RepositoryItem;