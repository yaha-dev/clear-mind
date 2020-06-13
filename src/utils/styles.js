import styled, { css } from 'styled-components';

export const Container = styled.div`
    display: flex;

    ${(props) =>
        props.theme &&
        css`
            background: ${props.theme.background};
            color: ${props.theme.foreground};
        `}
`;
