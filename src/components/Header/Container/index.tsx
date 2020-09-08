import React from 'react';
import Styled from 'styled-components';
import TopBar from '../TopBar';

const MainHeader = Styled.header`
    background: var(--primary-color);
`;

export default function Header() {
    return (
        <MainHeader>
            <TopBar/>
        </MainHeader>
    );
}