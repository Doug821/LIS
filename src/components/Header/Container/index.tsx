import React from 'react';
import Styled from 'styled-components';
import TopBar from '../TopBar';
import Banner, { BannerProps } from '../Banner'

const MainHeader = Styled.header`
    background: var(--primary-color);
`;

const Header: React.FC<BannerProps> = (props) => {
    return (
        <MainHeader>
            <TopBar/>
            <Banner {...props}/>
        </MainHeader>
    );
}

export default Header;