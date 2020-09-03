import React from 'react';
import Styled from 'styled-components';

const MainHeader = Styled.header`
    background: #2B4C88;
    color: #F2F2F2;
`;

export default function Header() {
    return (
        <MainHeader>
            <h1>Cabeçalho</h1>
        </MainHeader>
    );
}