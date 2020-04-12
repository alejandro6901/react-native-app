import React from 'react';
import { Image, StyleSheet } from 'react-native';

export default function ImageLogo() {
	return <Image style={styles.logo} source={require('../../assets/logo.png')} resizeMode="contain" />;
}

const styles = StyleSheet.create({
	logo: {
		width: '100%',
		height: 120,
		marginTop: 20
	}
});
