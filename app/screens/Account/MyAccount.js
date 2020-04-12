import React, { useState, useEffect, useContext } from 'react';
import * as firebase from 'firebase';
import Loading from '../../components/Loading';
import UserGuest from './UserGuest';
import UserLogged from './UserLogged';
import { LanguageContext } from '../../context/LanguageContext';
import I18n from '../../utils/i18n';

export default function MyAccount(props) {
	const { navigation } = props;
	const [ login, setLogin ] = useState(null);
	const [ lang ] = useContext(LanguageContext);

	useEffect(() => {
		firebase.auth().onAuthStateChanged((user) => {
			!user ? setLogin(false) : setLogin(true);
		});
	}, []);

	if (login === null) {
		return <Loading isVisible={true} text={I18n.t('userGuestScreen.loading', { locale: lang })} />;
	}

	return login ? <UserLogged /> : <UserGuest navigation={navigation} />;
}
