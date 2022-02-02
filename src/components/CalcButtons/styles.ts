import styled from 'styled-components';

export const Container = styled.div`

    display: grid;
    grid-template-columns: 4rem 4rem 4rem 4rem;
    grid-template-rows: repeat(6, 4rem);
    column-gap: 1.525rem;
    row-gap: 1.525rem;
    grid-template-areas:    "m1 m2 m3 m4"
                            "s1 s2 s3 s4"
                            "n7 n8 n9 s5"
                            "n4 n5 n6 s6"
                            "n1 n2 n3 ig"
                            "pr n0 po ig";

`;

export const Button = styled.div`

    background: rgba(0,0,0,0.2);
    border-radius: 1.25rem;
    display: flex;
    justify-content: center;
    align-items: center;

    &.m1 { grid-area: m1; }
    &.m2 { grid-area: m2; }
    &.m3 { grid-area: m3; }
    &.m4 { grid-area: m4; }

    &.s1 { grid-area: s1; }
    &.s2 { grid-area: s2; }
    &.s3 { grid-area: s3; }
    &.s4 { grid-area: s4; }

    &.n7 { grid-area: n7; }
    &.n8 { grid-area: n8; }
    &.n9 { grid-area: n9; }
    &.s5 { grid-area: s5; }

    &.n4 { grid-area: n4; }
    &.n5 { grid-area: n5; }
    &.n6 { grid-area: n6; }
    &.s6 { grid-area: s6; }

    &.n1 { grid-area: n1; }
    &.n2 { grid-area: n2; }
    &.n3 { grid-area: n3; }

    &.pr { grid-area: pr; }
    &.n0 { grid-area: n0; }
    &.po { grid-area: po; }

    &.ig { grid-area: ig; }

`;
