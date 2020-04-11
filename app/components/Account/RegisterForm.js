import React, { useState, useContext } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Button } from 'react-native-elements';
import { validateEmail } from '../../helpers/Validations';
import * as firebase from 'firebase';
import { ThemeContext } from '../../context/ThemeContext';
import InputText from '../../components/InputText';
import { HelperText } from 'react-native-paper';

export default function RegisterForm() {
	const [ theme ] = useContext(ThemeContext);
	const [ hidePassword, setHidePassword ] = useState(true);
	const [ hideRepeatPassword, setHideRepeatPassword ] = useState(true);
	const [ email, setEmail ] = useState('');
	const [ password, setPassword ] = useState('');
	const [ repeatPassword, setRepeatPassword ] = useState('');
	const [ isError, setError ] = useState(false);
	const [ errorMessage, setErrorMessage ] = useState(false);

	const register = async () => {
		if (!email || !password || !repeatPassword) {
			setError(true);
			setErrorMessage("Campo requerido")
		} else {
			if (validateEmail(email)) {
				setError(false);
				if (password !== repeatPassword) {
					console.log('Error: Las contraseñas no coinciden');
				} else {
					setError(false);
					await firebase
						.auth()
						.createUserWithEmailAndPassword(email, password)
						.then(() => {
							console.log('Creado Usuario: ' + email);
						})
						.catch((e) => {
							console.log('Error al crear cuenta');
						});
				}
			} else {
				setError(false);
				console.log('Error: Por favor ingrese un email válido');
			}
		}
	};

	return (
		<View style={styles.formContainer}>
			<InputText
				label="Correo Electrónico"
				text={email}
				isActive={true}
				keyboardType="email-address"
				isError={isError}
				errorMessage={errorMessage}
				onChange={(e) => setEmail(e.nativeEvent.text)}
			/>
			<InputText
				label="Contraseña"
				text={password}
				isActive={true}
				isError={isError}
				errorMessage={errorMessage}
				onChange={(e) => setPassword(e.nativeEvent.text)}
				secureTextEntry={true}
			/>
			<InputText
				label="Repetir Contraseña"
				text={repeatPassword}
				isActive={true}
				isError={isError}
				errorMessage={errorMessage}
				onChange={(e) => setRepeatPassword(e.nativeEvent.text)}
				secureTextEntry={true}
			/>
			<Button
				title="Unirse"
				containerStyle={styles.btnContainerRegister}
				buttonStyle={{ backgroundColor: theme.color }}
				onPress={register}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	formContainer: {
		margin: 10,
		backgroundColor: '#F2F2F2'
	},
	btnContainerRegister: {
		marginTop: 20,
		width: '95%'
	}
});
