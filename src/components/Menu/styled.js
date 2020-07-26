import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const MenuStyled = styled.nav`
    width: 200px;
    min-width: 200px;
    height: 100vh;
    background-color: var(--gray);
    display: flex;
    flex-direction: column;
`;

export const MenuList = styled.ul`
    padding: 0;
    margin: 15px 0 0;
    display: flex;
    flex-direction: column;
`;

export const MenuLink = styled(NavLink)`
    display: flex;
    align-items: center;
    color: #656c73;
    text-decoration: none;
    padding: 7px 15px;
    font-size: 16px;
    &.active {
        color: var(--accent);
    }
`;

export const MenuIcon = ({ icon }) => {
    let MenuIcon = styled(icon)`
        font-size: 25px;
        margin-right: 10px;
    `;
    return <MenuIcon />;
};

export const MenuInfo = styled.p`
    text-align: right;
    margin-top: auto;
    margin-bottom: 0;
    padding: 3px 15px;
    color: #656c73;
    font-size: 12px;
    border-top: 1px solid currentColor;
`;
