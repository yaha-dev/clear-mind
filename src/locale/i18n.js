import React from 'react';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import { INIT_LOCALE, IS_DEV } from 'utils/constants';

import en from './translations/en.json';
import ru from './translations/ru.json';

i18n.use(initReactI18next).init({
    resources: { en, ru },
    lng: INIT_LOCALE,
    load: 'languageOnly',
    fallbackLng: INIT_LOCALE,
    keySeparator: false,
    debug: IS_DEV,
});

export const LocaleContext = React.createContext({
    locale: INIT_LOCALE,
    setLocale: () => {},
});

LocaleContext.displayName = 'LocaleContext';

export default i18n;
