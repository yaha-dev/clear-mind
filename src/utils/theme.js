import React from 'react';

import { INIT_THEME } from 'utils/constants';

export const ThemeContext = React.createContext({
    theme: INIT_THEME,
    setTheme: () => {},
});

ThemeContext.displayName = 'ThemeContext';
