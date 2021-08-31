import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

jest.mock('../src/i18n/initializeIi8next', () => () => {
  i18n
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
      resources: {},
      lng: 'testing',
      interpolation: {
        escapeValue: false, // react already safes from xss
      },
    });

  return i18n;
});
