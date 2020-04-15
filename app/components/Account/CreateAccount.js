import React, { useContext } from 'react';
import { StyleSheet, Text } from 'react-native';
import { ThemeContext } from '../../context/ThemeContext';
import { STACK_REGISTER } from '../../navigations/Stacks/RoutesNames';
import { LanguageContext } from '../../context/LanguageContext';
import I18n from '../../utils/i18n';

export default function CreateAccount(props) {
	const { navigation } = props;
	const [ theme ] = useContext(ThemeContext);
	const [ lang ] = useContext(LanguageContext);

	return (
		<Text style={styles.textRegister}>
		    {I18n.t('loginScreen.noAccountText', { locale: lang })}{' '}
			<Text
				style={[ styles.btnRegister, { color: theme.text.color } ]}
				onPress={() => {
					navigation.navigate(STACK_REGISTER);
				}}
			>
				{I18n.t('loginScreen.signUp', { locale: lang })}
			</Text>
		</Text>
	);
}

const styles = StyleSheet.create({
	textRegister: {
		textAlign:'center',
		marginLeft: 10,
		marginRight: 10
	},
	btnRegister: {
		fontWeight: 'bold'
	}
});
