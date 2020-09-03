import React from 'react';
import Styled from 'styled-components';

const MainHeader = Styled.header`
    background: var(--primary-color);
`;

export default function Header() {
    return (
        <MainHeader>
            <h1>Cabeçalho</h1>
        </MainHeader>
    );
}