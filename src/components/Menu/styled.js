import styled, { css } from 'styled-components';

export const MenuStyled = styled.nav`
    width: 30%;
    height: 100vh;

    ${(props) =>
        props.theme &&
        css`
            background: ${props.theme.foreground};
            color: ${props.theme.background};
        `}
`;
