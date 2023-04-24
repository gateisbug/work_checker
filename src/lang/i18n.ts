import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './lang.en.json';
import ko from './lang.ko.json';
import kp from './lang.kp.json';

i18n
  .use(initReactI18next)
  .init({
    lng: 'ko',
    resources: {
      en: {
        translation: en,
      },
      ko: {
        translation: ko,
      },
      kp: {
        translation: kp,
      }
    },
    fallbackLng: 'ko',
    keySeparator: false,
    interpolation: {
      escapeValue: false
    }
  })

export default i18n;