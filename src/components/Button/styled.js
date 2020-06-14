import styled, { css } from 'styled-components';

export const Btn = styled.button`
    display: inline-block;
    border-radius: 3px;
    padding: 0.5rem 0;
    margin: 0.5rem 1rem;
    min-width: 11rem;
    border: 0;
    background: #3B4455;
    color: #fff;

    /* ${(props) =>
        props.theme &&
        css`
            background: ${props.theme.primary};
            color: ${props.theme.text};
        `} */
`;
