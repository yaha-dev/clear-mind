import { Locale } from 'utils/types';

export interface IContextI18n {
    locale: Locale;
    setLocale: () => void;
}
