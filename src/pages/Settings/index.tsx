import React from 'react';

import Button from 'components/Button';

import { LocaleContext } from 'locale/i18n';
import { ThemeContext } from 'utils/theme';

export default function Settings(): JSX.Element {
    return (
        <div>
            <LocaleContext.Consumer>
                {({ locale, setLocale }) => {
                    return <Button onClick={setLocale}>Change locale</Button>;
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
