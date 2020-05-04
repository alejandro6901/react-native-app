import React, { useState } from 'react';
import Navigation from './app/navigations/Navigation';
import { firebaseApp } from './app/environments/environment';
import { ThemeContext } from './app/context/ThemeContext';
import { LanguageContext } from './app/context/LanguageContext';
import CustomTheme from './app/styles/ExportThemes';
import I18n from './app/utils/i18n';

export default function App() {
	const [ theme, setTheme ] = useState(CustomTheme.THEME_SUCCESS);
	const [ lang, setLang ] = useState(I18n.locale);
	return (
		<LanguageContext.Provider value={[ lang, setLang ]}>
			<ThemeContext.Provider value={[ theme, setTheme ]}>
				<Navigation />
			</ThemeContext.Provider>
		</LanguageContext.Provider>
	);
}
