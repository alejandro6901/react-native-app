import React, { useState, useContext, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';
import * as firebase from 'firebase';
import InfoUser from '../../components/Account/InfoUser';
import { ThemeContext } from '../../context/ThemeContext';
import { LanguageContext } from '../../context/LanguageContext';
import I18n from '../../utils/i18n';

export default function UserLogged() {
  const [ theme ] = useContext(ThemeContext);
  const [ lang ] = useContext(LanguageContext);
  const [ userInfo, setUserInfo ] = useState({});
  useEffect(() => {
    (async () => {
      const user = await firebase.auth().currentUser;
      setUserInfo(user.providerData[0]);
    })();
  }, []);

  return (
    <View style={[ styles.formContainer, { backgroundColor: theme.formContainer } ]}>
      <InfoUser userInfo={userInfo} />
      <Button
        containerStyle={styles.btnContainerRegister}
        title={I18n.t('infoUserScreen.button', { locale: lang })}
        buttonStyle={{ backgroundColor: theme.button.backgroundColor }}
        onPress={() => firebase.auth().signOut()}
      />
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
