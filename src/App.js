import React, { useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import Menu from 'components/Menu';
import { Container, GlobalStyles } from 'styles';

import { routerList, routerKeys } from 'utils/routes';
import { INIT_LOCALE } from 'utils/constants';

import { themes, ThemeContext } from 'utils/themes';
import i18n, { LocaleContext } from 'locale/i18n';

function App() {
    const [theme, toggleTheme] = useState(themes.light);
    const [locale, toggleLocale] = useState(INIT_LOCALE);

    const setTheme = () => {
        toggleTheme(theme === themes.light ? themes.dark : themes.light);
    };
    const setLocale = () => {
        const lng = locale === 'en' ? 'ru' : 'en';
        i18n.changeLanguage(lng);
        toggleLocale(lng);
    };

    return (
        <LocaleContext.Provider value={{ locale, setLocale }}>
            <ThemeContext.Provider value={{ theme, setTheme }}>
                <ThemeProvider theme={theme}>
                    <BrowserRouter>
                        <GlobalStyles />

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
                </ThemeProvider>
            </ThemeContext.Provider>
        </LocaleContext.Provider>
    );
}

export default App;
