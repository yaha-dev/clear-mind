import { Locale, Theme } from './types';

export const IS_DEV: boolean = process.env.NODE_ENV === 'development';

export const INIT_LOCALE: Locale = IS_DEV ? 'ru' : 'en';

export const INIT_THEME = (function () {
    return localStorage.getItem('theme') || 'light';
})() as Theme;

export const packageConf = require('../../package.json');
