import { View, StyleSheet, Pressable, Text } from 'react-native';
import theme from '../theme'
const styles = StyleSheet.create({
    container: {
        backgroundColor: theme.backgroundColor.backgroundColor,
        height: theme.statusBar.height,
        display: 'flex',
        justifyContent: 'center',
        paddingLeft: 5
    },
    text: {
        color: theme.backgroundColor.textColor,
    }
    // ...
});

const AppBar = () => {
    return <View style={styles.container}>
        <Pressable>
            <Text style={styles.text}>Repositories</Text>
        </Pressable>
    </View>;
};

export default AppBar;