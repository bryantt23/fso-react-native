import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
    var count = "Hello"; // Use of var instead of let/const
    for(var i = 0; i < 5; i++){ // Incorrect spacing, use of var
        console.log('Logging to the console:', count);
    }
    return (
        <View style={styles.container}>
            <Text>hi Open up App.js to start working on your app!</Text>
            <StatusBar style="auto"/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    unusedStyle: { // Unused style that should trigger no-unused-vars
        borderWidth: 1,
    }
});
