import styled, { css, createGlobalStyle } from 'styled-components';

import LightItalic from 'fonts/OpenSans-LightItalic.woff2';
import Light from 'fonts/OpenSans-Light.woff2';
import Regular from 'fonts/OpenSans-Regular.woff2';
import Italic from 'fonts/OpenSans-Italic.woff2';
import Bold from 'fonts/OpenSans-Bold.woff2';

export const GlobalStyles = createGlobalStyle`
    @font-face {
        font-family: 'Open Sans';
        src: url(${LightItalic}) format('woff2');
        font-weight: 300;
        font-style: italic;
    }

    @font-face {
        font-family: 'Open Sans';
        src: url(${Light}) format('woff2');
        font-weight: 300;
        font-style: normal;
    }

    @font-face {
        font-family: 'Open Sans';
        src: url(${Regular}) format('woff2');
        font-weight: normal;
        font-style: normal;
    }

    @font-face {
        font-family: 'Open Sans';
        src: url(${Bold}) format('woff2');
        font-weight: bold;
        font-style: normal;
    }

    @font-face {
        font-family: 'Open Sans';
        src: url(${Italic}) format('woff2');
        font-weight: normal;
        font-style: italic;
    }

    *,
    *::after,
    *::before {
        box-sizing: border-box;
    }

    body {
        min-height: 100vh;
        margin: 0;
        padding: 0;
        font: normal 400 18px/22px 'Open Sans';

        --background: #0e1724;
        --light-background: #F4F5F7;
        --bg-btn: #3B4455;
        --text: #888993;
        
        --gray: #262E3B;
        --accent: #ECC417;

        ${(props) =>
            props.theme === 'dark' &&
            css`
                --background: #fff;
                --light-background: #262e3b;
                --text: #fff;
            `}
    }
`;

export const Container = styled.div`
    display: flex;
    background-color: var(--background);
    color: var(--text);
`;
