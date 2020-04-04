/* import React from 'react';
import Navigation from './app/navigations/Navigation'

export default function App() {
    return <Navigation />
}
 */

//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

// create a component
class MyClass extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Project Structure</Text>
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

//make this component available to the app
export default MyClass;

