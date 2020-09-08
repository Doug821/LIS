import React from 'react';
import Styled from 'styled-components';
import Logo from '../Logo';
import Menu from '../Menu';


const TopBarContainer = Styled.div`
    display: flex;
    align-items: center;
    background: var(--primary-dark);
    height: 4rem;
`;

export default function TopBar() {
    return (
        <TopBarContainer>
            <Logo />
            <Menu/>
        </TopBarContainer>
    );
}