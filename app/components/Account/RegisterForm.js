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

export default function RegisterForm(props) {
    const { navigation } = props;
  const [ theme ] = useContext(ThemeContext);
  const [ lang ] = useContext(LanguageContext);
  const [ snackVisible, setSnackVisible ] = useState(false);
  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');
  const [ password_confirmation, setPasswordConfirmation ] = useState('');
  const [ isError, setError ] = useState(null);
  const [ snackMessage, setSnackMessage ] = useState('');
  const [ errorMessage, setErrorMessage ] = useState();
	const [ isLoading, setIsLoading ] = useState(false);

  _onDismissSnackBar = () => setSnackVisible(false);
   const register = async () => {
    let form = {
      email: email,
      password: password,
      password_confirmation: password_confirmation
    };
		let errors = await validate(form, 'register');
		console.log(errors);
    if (Object.keys(errors).length > 0) {
      setError(true);
      setErrorMessage(errors);
    } else {
      setError(false);
      setErrorMessage();
      setIsLoading(true);
      await firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then(() => {
          setIsLoading(false);
          navigation.navigate(STACK_MY_ACCOUNT);
        })
        .catch((e) => {
          setIsLoading(false);
          setSnackVisible(true);
          setSnackMessage(e.message);
        });
    }
  };

  return (
    <View style={[ styles.formContainer, { backgroundColor: theme.formContainer } ]}>
      <InputText
        label={I18n.t('registerScreen.email', { locale: lang })}
        text={email}
        who={'email'}
        keyboardType="email-address"
        isError={isError}
        isActive={true}
        errorMessage={errorMessage}
        onChange={(e) => setEmail(e.nativeEvent.text)}
      />
      <InputText
        label={I18n.t('registerScreen.password', { locale: lang })}
        text={password}
        who={'password'}
        isActive={true}
        isError={isError}
        errorMessage={errorMessage}
        onChange={(e) => setPassword(e.nativeEvent.text)}
        secureTextEntry={true}
      />
      <InputText
        label={I18n.t('registerScreen.repeatPassword', { locale: lang })}
        text={password_confirmation}
        isActive={true}
        isError={isError}
        who={'password_confirmation'}
        errorMessage={errorMessage}
        onChange={(e) => setPasswordConfirmation(e.nativeEvent.text)}
        secureTextEntry={true}
      />
      <Button
        title={I18n.t('registerScreen.signUp', { locale: lang })}
        disabled={isLoading}
        loading={isLoading}
        containerStyle={styles.btnContainerRegister}
        buttonStyle={{ backgroundColor: theme.button.backgroundColor }}
        onPress={register}
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
    marginTop: 20,
    width: '95%'
  }
});
