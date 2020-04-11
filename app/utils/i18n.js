import I18n from "i18n-js";
import en from '../locales/lang/en.json';
import es from '../locales/lang/es.json';

I18n.fallbacks = true;
I18n.translations = {
  en,
  es
};

export default I18n;