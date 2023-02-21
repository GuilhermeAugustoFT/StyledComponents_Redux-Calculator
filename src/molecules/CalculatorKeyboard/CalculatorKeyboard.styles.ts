import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 0;
`;

export const Span3 = styled.div`
    grid-column: span 3;
`

export const Span2 = styled.div`
    grid-column: span 2;
`