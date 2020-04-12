import React from 'react';
import { StyleSheet, View } from 'react-native';

export default function CustomViewContainer(props) {
	return <View style={styles.viewContainer}>{props.children}</View>;
}

const styles = StyleSheet.create({
	viewContainer: {
		marginRight: 40,
		marginLeft: 40
	}
});
