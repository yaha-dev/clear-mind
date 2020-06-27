export const IS_DEV = process.env.NODE_ENV === 'development';

export const INIT_LOCALE = IS_DEV ? 'ru' : 'en';

export const INIT_THEME = (function () {
    return localStorage.getItem('theme') || 'light';
})();

export const packageConf = require('../../package.json');
