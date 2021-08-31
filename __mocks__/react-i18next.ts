jest.mock('react-i18next', () => ({
  initReactI18next: jest.requireActual('react-i18next').initReactI18next,
  I18nextProvider: jest.requireActual('react-i18next').I18nextProvider,
  useTranslation: () => [((_) => _), {
    changeLanguage: () => new Promise((r) => { r(undefined); }),
  }],
}));
