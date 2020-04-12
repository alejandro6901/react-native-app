import React, { useContext } from 'react';
import { StyleSheet } from 'react-native';
import { Divider } from 'react-native-elements';
import { ThemeContext } from '../context/ThemeContext';

export default function CustomDivider() {
	const [ theme ] = useContext(ThemeContext);
	return <Divider style={[ styles.divider, { backgroundColor: theme.divider.backgroundColor } ]} />;
}

const styles = StyleSheet.create({
	divider: {
		margin: 40
	}
});
