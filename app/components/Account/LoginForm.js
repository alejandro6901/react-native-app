import React, { useState, useContext } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Button } from 'react-native-elements';
import * as firebase from 'firebase';
import { ThemeContext } from '../../context/ThemeContext';
import InputText from '../../components/InputText';
import { LanguageContext } from '../../context/LanguageContext';
import I18n from '../../utils/i18n';
import { validate } from '../../helpers/Validations';
import { Snackbar } from 'react-native-paper';
import { STACK_MY_ACCOUNT } from '../../navigations/Stacks/RoutesNames';

export default function LoginForm(props) {
	const { navigation } = props;
	const [ snackMessage, setSnackMessage ] = useState('');
	const [ theme ] = useContext(ThemeContext);
	const [ email, setEmail ] = useState('');
	const [ snackVisible, setSnackVisible ] = useState(false);
	const [ password, setPassword ] = useState('');
	const [ isError, setError ] = useState(null);
	const [ errorMessage, setErrorMessage ] = useState('');
	const [ lang ] = useContext(LanguageContext);
	const [ isLoading, setIsLoading ] = useState(false);

	_onDismissSnackBar = () => setSnackVisible(false);
	const login = async () => {
		let form = {
			email: email,
			password: password
		};
		let errors = await validate(form, 'login');
		if (Object.keys(errors).length > 0) {
			setError(true);
			setErrorMessage(errors);
		} else {
			setError(false);
			setIsLoading(true);
			await firebase
				.auth()
				.signInWithEmailAndPassword(email, password)
				.then(() => {
					setIsLoading(false);
					navigation.navigate(STACK_MY_ACCOUNT);
				})
				.catch((e) => {
					setIsLoading(false);
					setSnackVisible(true);
					console.log(e);
					setSnackMessage(e.message);
				});
		}
	};
	return (
		<View style={[ styles.formContainer, { backgroundColor: theme.formContainer } ]}>
			<InputText
				label={I18n.t('loginScreen.email', { locale: lang })}
				text={email}
				isError={isError}
				isActive={true}
				keyboardType="email-address"
				errorMessage={errorMessage['email']}
				onChange={(e) => setEmail(e.nativeEvent.text)}
			/>
			<InputText
				label={I18n.t('loginScreen.password', { locale: lang })}
				text={password}
				isActive={true}
				isError={isError}
				errorMessage={errorMessage['password']}
				onChange={(e) => setPassword(e.nativeEvent.text)}
				secureTextEntry={true}
			/>

			<Button
				title={I18n.t('loginScreen.login', { locale: lang })}
				disabled={isLoading}
				loading={isLoading}
				containerStyle={styles.btnContainerRegister}
				buttonStyle={{ backgroundColor: theme.button.backgroundColor }}
				onPress={login}
			/>
			<View style={{ marginTop: 100 }}>
				<Snackbar visible={snackVisible} onDismiss={_onDismissSnackBar} duration={3000}>
					<Text>{snackMessage}</Text>
				</Snackbar>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	formContainer: {
		margin: 10
	},
	btnContainerRegister: {
		width: '95%'
	}
});
