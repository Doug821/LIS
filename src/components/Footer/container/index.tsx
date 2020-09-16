import React from 'react';
import Styled from 'styled-components';
import FooterContent from '../content';

const FooterContainer = Styled.footer`
    background: var(--background-dark);
`;

export default function Footer () {
    return (
        <FooterContainer>
            <FooterContent/>
        </FooterContainer>
    );
}