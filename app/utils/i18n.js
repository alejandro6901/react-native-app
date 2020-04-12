import { NativeModules, Platform } from 'react-native';
import I18n from 'i18n-js';
import en from '../locales/lang/en.json';
import es from '../locales/lang/es.json';

I18n.fallbacks = true;
I18n.translations = {
	en,
	es
};
I18n.locale =
	Platform.OS === 'ios'
		? NativeModules.SettingsManager.settings.AppleLocale
		: NativeModules.I18nManager.localeIdentifier;
I18n.locale = I18n.locale.substring(0, 2);
export default I18n;
