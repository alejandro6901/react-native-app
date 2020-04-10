import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Input, Icon } from 'react-native-elements';
import { validateEmail } from '../../helpers/Validations';
import * as firebase from 'firebase';

export default function RegisterForm(props) {
  const { toastRef } = props;
	const [ hidePassword, setHidePassword ] = useState(true);
	const [ hideRepeatPassword, setHideRepeatPassword ] = useState(true);
	const [ email, setEmail ] = useState('');
	const [ password, setPassword ] = useState('');
	const [ repeatPassword, setRepeatPassword ] = useState('');

	const register = async () => {
		if (!email || !password || !repeatPassword) return toastRef.current.show("Campos Requeridos");
		if (!validateEmail(email)) return console.log('email incorrecto');
		if (password !== repeatPassword) return console.log('las contraseñas no coinciden');
		await firebase
			.auth()
			.createUserWithEmailAndPassword(email, password)
			.then(() => {
				console.log('usuario creado');
			})
			.catch(() => {
				console.log('error al crear la cuenta');
			});
	};

	return (
		<View style={styles.formContainer}>
			<Input
				placeholder="Correo electrónico"
				containerStyle={styles.inputForm}
				onChange={(e) => setEmail(e.nativeEvent.text)}
				rightIcon={<Icon type="material-community" name="email" iconStyle={styles.iconRight} />}
			/>
			<Input
				placeholder="Contraseña"
				password={true}
				secureTextEntry={hidePassword}
				containerStyle={styles.inputForm}
				onChange={(e) => setPassword(e.nativeEvent.text)}
				rightIcon={
					<Icon
						type="material-community"
						name={hidePassword ? 'eye-outline' : 'eye-off-outline'}
						iconStyle={styles.iconRight}
						onPress={() => setHidePassword(!hidePassword)}
					/>
				}
			/>
			<Input
				placeholder="Repetir Contraseña"
				password={true}
				secureTextEntry={hideRepeatPassword}
				containerStyle={styles.inputForm}
				onChange={(e) => setRepeatPassword(e.nativeEvent.text)}
				rightIcon={
					<Icon
						type="material-community"
						name={hideRepeatPassword ? 'eye-outline' : 'eye-off-outline'}
						iconStyle={styles.iconRight}
						onPress={() => setHideRepeatPassword(!hideRepeatPassword)}
					/>
				}
			/>
			<Button
				title="Unirse"
				containerStyle={styles.btnContainerRegister}
				buttonStyle={styles.btnRegister}
				onPress={register}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	formContainer: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		marginTop: 30
	},
	btnContainerRegister: {
		marginTop: 20,
		width: '95%'
	},
	btnRegister: {
		backgroundColor: '#00a680'
	},
	iconRight: {
		color: '#c1c1c1'
	},
	inputForm: {
		marginTop: 20
	}
});
