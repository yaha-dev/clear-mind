import React, { Component } from 'react';

import Button from 'components/Button';

import { LocaleContext } from 'locale/i18n';
import { ThemeContext } from 'utils/theme';

export default class Settings extends Component {
    render() {
        return (
            <div>
                <LocaleContext.Consumer>
                    {({ locale, setLocale }) => {
                        return (
                            <Button onClick={setLocale}>Change locale</Button>
                        );
                    }}
                </LocaleContext.Consumer>
                <ThemeContext.Consumer>
                    {({ setTheme }) => (
                        <Button onClick={setTheme}>Change theme</Button>
                    )}
                </ThemeContext.Consumer>
            </div>
        );
    }
}
