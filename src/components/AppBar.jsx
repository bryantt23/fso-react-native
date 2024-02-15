import React from 'react';
import { View, StyleSheet, Pressable, Text, ScrollView } from 'react-native';
import theme from '../theme';
import { Link } from 'react-router-native';

const styles = StyleSheet.create({
    container: {
        backgroundColor: theme.backgroundColor.backgroundColor,
        height: theme.statusBar ? theme.statusBar.height : 50,
        flexDirection: 'row', // Align children in a row
        alignItems: 'center', // Center children vertically
    },
    scrollView: {
        flex: 1, // Take up all available space
    },
    link: {
        marginRight: 20, // Add some margin for spacing between items
        paddingVertical: 10, // Add some vertical padding for touch area
    },
    text: {
        color: theme.backgroundColor.textColor,
        fontSize: theme.fontSizes.subheading,
    },
    // Add styles for active tab indicator if needed
});

const AppBar = () => {
    // Logic to determine active tab can go here

    return (
        <View style={styles.container}>
            <ScrollView
                horizontal
                style={styles.scrollView}
                showsHorizontalScrollIndicator={false} // Optionally hide the horizontal scroll indicators
                contentContainerStyle={{ paddingHorizontal: 10 }} // Add padding on the sides
            >
                {/* Links/Tabs go here */}
                <Link to="/" component={Pressable} style={styles.link}>
                    <Text style={styles.text}>Repositories</Text>
                </Link>
                <Link to="/sign-in" component={Pressable} style={styles.link}>
                    <Text style={styles.text}>Sign In</Text>
                </Link>
                {/* Add more links/tabs as needed */}
            </ScrollView>
        </View>
    );
};

export default AppBar;