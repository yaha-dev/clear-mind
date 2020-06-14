import styled, { css } from 'styled-components';
import { NavLink } from 'react-router-dom';

export const MenuStyled = styled.nav`
    padding: 15px;
    min-width: 200px;
    height: 100vh;
    background-color: var(--gray);

    /* ${(props) =>
        props.theme &&
        css`
            background: ${props.theme.neutral};
        `} */
`;

export const MenuList = styled.ul`
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
`;

export const MenuLink = styled(NavLink)`
    color: #656c73;
    text-decoration: none;
    &.active {
        color: var(--accent);
    }
`;
