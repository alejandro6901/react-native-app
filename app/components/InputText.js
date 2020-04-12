import React, { useContext } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TextInput, HelperText } from 'react-native-paper';
import { ThemeContext } from '../context/ThemeContext';

export default function InputText(props) {
	const [ theme ] = useContext(ThemeContext);
	const { label, text, isActive, keyboardType, onChange, secureTextEntry, isError, errorMessage } = props;

	return (
		<View style={theme.input.backgroundColor}>
			<TextInput
				label={label}
				text={text}
				isActive={isActive}
				keyboardType={keyboardType}
				onChange={onChange}
				secureTextEntry={secureTextEntry}
				style={[ styles.inputForm, { backgroundColor: theme.input.backgroundColor } ]}
				theme={{ colors: { primary: theme.input.color } }}
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
		marginTop: 20
	}
});
