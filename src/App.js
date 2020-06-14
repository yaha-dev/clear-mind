import React, { useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Menu from 'components/Menu';
import { Container, GlobalStyles } from 'styles';

import { routerList, routerKeys } from 'utils/routes';
import { INIT_LOCALE, INIT_THEME } from 'utils/constants';

import { ThemeContext } from 'utils/theme';
import i18n, { LocaleContext } from 'locale/i18n';

function App() {
    const [theme, toggleTheme] = useState(INIT_THEME);
    const [locale, toggleLocale] = useState(INIT_LOCALE);

    const setTheme = () => {
        const nextTheme = theme === 'light' ? 'dark' : 'light';
        localStorage.setItem('theme', nextTheme);
        toggleTheme(nextTheme);
    };
    const setLocale = () => {
        const lng = locale === 'en' ? 'ru' : 'en';
        i18n.changeLanguage(lng);
        toggleLocale(lng);
    };

    return (
        <LocaleContext.Provider value={{ locale, setLocale }}>
            <ThemeContext.Provider value={{ theme, setTheme }}>
                <BrowserRouter>
                    <GlobalStyles theme={theme} />

                    <Container>
                        <Menu />

                        <Switch>
                            {routerKeys.map((key) => {
                                const route = routerList[key];
                                return (
                                    <Route
                                        exact={route.path === '/'}
                                        path={route.path}
                                        component={route.component}
                                        key={key}
                                    />
                                );
                            })}
                        </Switch>
                    </Container>
                </BrowserRouter>
            </ThemeContext.Provider>
        </LocaleContext.Provider>
    );
}

export default App;
