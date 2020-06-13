import styled, { css } from 'styled-components';
import { NavLink } from 'react-router-dom';

export const MenuStyled = styled.nav`
    padding: 15px;
    min-width: 200px;
    height: 100vh;

    ${(props) =>
        props.theme &&
        css`
            background: ${props.theme.foreground};
            color: ${props.theme.background};
        `}
`;

export const MenuList = styled.ul`
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
`;

export const MenuLink = styled(NavLink)`
    color: #fff;
    text-decoration: none;
    &.active {
        color: red;
    }
`;
