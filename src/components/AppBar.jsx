import React from 'react';
import { View, StyleSheet, Pressable, Text } from 'react-native';
import theme from '../theme';

const styles = StyleSheet.create({
    container: {
        backgroundColor: theme.backgroundColor.backgroundColor,
        // Assuming you have a status bar height in your theme, otherwise use a fixed value or import from Constants
        height: theme.statusBar ? theme.statusBar.height : 50,
        display: 'flex',
        justifyContent: 'center',
        paddingLeft: 5,
    },
    text: {
        color: theme.backgroundColor.textColor,
        fontSize: theme.fontSizes.subheading, // Increased font size, assuming 'subheading' is larger than 'body'
    },
    // ... (other styles if needed)
});

const AppBar = () => {
    const handlePress = () => {
        console.log('Repositories');
    };

    return (
        <View style={styles.container}>
            <Pressable onPress={handlePress}>
                <Text style={styles.text}>Repositories</Text>
            </Pressable>
        </View>
    );
};

export default AppBar;
