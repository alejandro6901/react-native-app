import React, { useContext, useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TextInput, HelperText } from 'react-native-paper';
import { ThemeContext } from '../context/ThemeContext';

export default function InputText(props) {
	const [ errorState, setErrorState ] = useState(true);
	const [ theme ] = useContext(ThemeContext);
	const { label, text, isActive, keyboardType, onChange, secureTextEntry, isError, errorMessage, delError} = props;

	return (
		<View style={theme.input.backgroundColor}>
			<TextInput
				label={label}
				text={text}
				error={isError}
				onFocus={() => setErrorState(false)}
				isActive={isActive}
				keyboardType={keyboardType}
				onChange={onChange}
				secureTextEntry={secureTextEntry}
				style={[ styles.inputForm, { backgroundColor: theme.input.backgroundColor } ]}
				theme={{ colors: { primary: theme.input.color } }}
			/>
			<HelperText type="error" visible={errorState && isError}>
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
