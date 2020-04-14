import React, { useState, useContext } from 'react';
import { StyleSheet, View } from 'react-native';
import { Button } from 'react-native-elements';
import * as firebase from 'firebase';
import { ThemeContext } from '../../context/ThemeContext';
import InputText from '../../components/InputText';
import { LanguageContext } from '../../context/LanguageContext';
import I18n from '../../utils/i18n';
import { validate } from '../../helpers/Validations';

export default function RegisterForm() {
	const [ theme ] = useContext(ThemeContext);
	const [ hidePassword, setHidePassword ] = useState(true);
	const [ hideRepeatPassword, setHideRepeatPassword ] = useState(true);
	const [ email, setEmail ] = useState('');
	const [ password, setPassword ] = useState('');
	const [ repeatPassword, setRepeatPassword ] = useState('');
	const [ isError, setError ] = useState(null);
	const [ errorMessage, setErrorMessage ] = useState('');
	const [ lang ] = useContext(LanguageContext);

	const register = async () => {
		let form = {
			email: email,
			password: password,
			password_confirmation: repeatPassword
		};
		let errors = await validate(form, 'register');
		if (Object.keys(errors).length > 0) {
			setError(true);
			setErrorMessage(errors);
		}

		/* if (!email || !password || !repeatPassword) {
			setError(true);
			setErrorMessage('Campo requerido');
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
		} */
	};

	return (
		<View style={[ styles.formContainer, { backgroundColor: theme.formContainer } ]}>
			<InputText
				label={I18n.t('registerScreen.email', { locale: lang })}
				text={email}
				isActive={true}
				keyboardType="email-address"
				isError={isError}
				errorMessage={errorMessage['email']}
				onChange={(e) => setEmail(e.nativeEvent.text)}
			/>
			<InputText
				label={I18n.t('registerScreen.password', { locale: lang })}
				text={password}
				isActive={true}
				isError={isError}
				errorMessage={errorMessage['password']}
				onChange={(e) => setPassword(e.nativeEvent.text)}
				secureTextEntry={true}
			/>
			<InputText
				label={I18n.t('registerScreen.repeatPassword', { locale: lang })}
				text={repeatPassword}
				isActive={true}
				isError={isError}
				errorMessage={errorMessage['password_confirmation']}
				onChange={(e) => setRepeatPassword(e.nativeEvent.text)}
				secureTextEntry={true}
			/>
			<Button
				title={I18n.t('registerScreen.signUp', { locale: lang })}
				containerStyle={styles.btnContainerRegister}
				buttonStyle={{ backgroundColor: theme.button.backgroundColor }}
				onPress={register}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	formContainer: {
		margin: 10
	},
	btnContainerRegister: {
		marginTop: 20,
		width: '95%'
	}
});
