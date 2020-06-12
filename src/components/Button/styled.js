import styled, { css } from 'styled-components';

export const Btn = styled.button`
    display: inline-block;
    border-radius: 3px;
    padding: 0.5rem 0;
    margin: 0.5rem 1rem;
    width: 11rem;
    background: transparent;
    color: white;
    border: 2px solid white;

    ${(props) =>
        props.theme &&
        css`
            background: ${props.theme.background};
            color: ${props.theme.foreground};
        `}
`;
