import { FlatList, View, StyleSheet } from 'react-native';
import RepositoryItem from './RepositoryItem'
import useRepositories from '../hooks/useRepositories'
import Text from './Text';

const styles = StyleSheet.create({
    separator: {
        height: 10,
    },
});

const ItemSeparator = () => <View style={styles.separator} />;

const RepositoryList = () => {
    const { loading, error, repositories } = useRepositories();

    if (loading) return <Text>Loading...</Text>;
    if (error) return <Text>Error :(</Text>;

    return (
        <FlatList
            data={repositories}
            ItemSeparatorComponent={ItemSeparator}
            renderItem={({ item, index, separators }) => (
                <RepositoryItem item={item} index={index} separators={separators} />
            )}
        />
    );
};

export default RepositoryList;