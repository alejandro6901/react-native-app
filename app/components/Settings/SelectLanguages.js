import React, { useContext } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Button } from 'react-native-elements';

/* BEGIN IMPORTING CONTEXT */
import { ThemeContext } from '../../context/ThemeContext';
import { LanguageContext } from '../../context/LanguageContext';
/* END IMPORTING CONTEXT */
import I18n from '../../utils/i18n';

export default function SelectLanguages() {
	const [ theme ] = useContext(ThemeContext);
	const [ lang, setLang ] = useContext(LanguageContext);
	return (
		<LanguageContext.Provider value={[ lang, setLang ]}>
			<Text style={style.title}>{I18n.t('settingStack.selectLanguage', { locale: lang })}</Text>
			<View style={style.viewBtn}>
				<Button
					buttonStyle={{ backgroundColor: theme.button.backgroundColor }}
					containerStyle={style.btnContainer}
					title={I18n.t('settingStack.englishBtn', { locale: lang })}
					onPress={() => setLang('en')}
				/>
			</View>
			<View style={style.viewBtn}>
				<Button
					buttonStyle={{ backgroundColor: theme.button.backgroundColor }}
					containerStyle={style.btnContainer}
					title={I18n.t('settingStack.spanishBtn', { locale: lang })}
					onPress={() => setLang('es')}
				/>
			</View>
		</LanguageContext.Provider>
	);
}

const style = StyleSheet.create({
	title: {
		fontWeight: 'bold',
		fontSize: 19,
		marginTop: 20,
		marginBottom: 20,
		textAlign: 'center'
	},
	viewBtn: {
		flex: 1,
		alignItems: 'center',
		marginBottom: 20
	},
	btnContainer: {
		width: '70%'
	}
});
