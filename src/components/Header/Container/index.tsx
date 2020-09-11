import React from 'react';
import Styled from 'styled-components';
import Banner from '../../Banner';
import TopBar from '../TopBar';

const MainHeader = Styled.header`
    background: var(--primary-color);
`;

export default function Header() {
    return (
        <MainHeader>
            <TopBar/>
            <Banner/>
        </MainHeader>
    );
}