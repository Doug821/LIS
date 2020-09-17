import React from 'react';
import Styled from 'styled-components';
import FooterContent from '../content';

const FooterContainer = Styled.footer`
    background: var(--background-dark);
    
    @media(min-width: 768px) {
        display: flex;
        justify-content: center;
    }
`;

export default function Footer () {
    return (
        <FooterContainer>
            <FooterContent/>
        </FooterContainer>
    );
}