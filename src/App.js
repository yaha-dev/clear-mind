import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';

import Menu from './components/Menu';
import { themes, ThemeContext } from './utils/themes';

function App() {
    const [theme, setTheme] = useState(themes.light);

    const toggleTheme = () => {
        setTheme(theme === themes.light ? themes.dark : themes.light);
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            <ThemeProvider theme={theme}>
                <Menu />
            </ThemeProvider>
        </ThemeContext.Provider>
    );
}

export default App;
