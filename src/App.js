import React, { useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import Menu from 'components/Menu';

import { Container } from 'utils/styles';
import { routerList, routerKeys } from 'utils/routing';
import { themes, ThemeContext } from 'utils/themes';

function App() {
    const [theme, setTheme] = useState(themes.light);

    const toggleTheme = () => {
        setTheme(theme === themes.light ? themes.dark : themes.light);
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            <ThemeProvider theme={theme}>
                <BrowserRouter>
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
    );
}

export default App;
