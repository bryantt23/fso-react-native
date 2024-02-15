import React from 'react';
import { View, StyleSheet, Pressable, Text, ScrollView } from 'react-native';
import theme from '../theme';
import { Link } from 'react-router-native';

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
    link: {
        marginRight: 10, // Add some margin if you have multiple items
    },
});

const AppBar = () => {
    return (
        <View style={styles.container}>
            <ScrollView horizontal>
                <Link to="/" component={Pressable} style={styles.link}>
                    <Text style={styles.text}>Repositories</Text>
                </Link>
                <Link to="/sign-in" component={Pressable} style={styles.link}>
                    <Text style={styles.text}>Sign In</Text>
                </Link></ScrollView>
        </View >
    );
};

export default AppBar;
