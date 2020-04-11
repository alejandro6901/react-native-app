import React, { useContext } from 'react';
import { StyleSheet, Text,View } from 'react-native';
import { TextInput, HelperText } from 'react-native-paper';
import { ThemeContext } from '../context/ThemeContext';

export default function InputText(props) {
	const [ theme ] = useContext(ThemeContext);
	const { label, text, isActive, keyboardType, onChange, secureTextEntry, isError, errorMessage } = props;

	return (
		<View style={{backgroundColor: '#F2F2F2'}}>
			<TextInput
				label={label}
				text={text}
				isActive={isActive}
				keyboardType={keyboardType}
				onChange={onChange}
				secureTextEntry={secureTextEntry}
				style={styles.inputForm}
				theme={{ colors: { primary: theme.color } }}
			/>
			<HelperText type="error" visible={isError}>
				<Text>{errorMessage}</Text>
			</HelperText>
		</View>
	);
}

const styles = StyleSheet.create({
	inputForm: {
		height: 60,
		backgroundColor: '#F2F2F2',
		marginTop: 20
	}
});
