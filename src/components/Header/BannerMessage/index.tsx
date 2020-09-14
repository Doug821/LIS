import React from 'react';
import { Link } from 'react-router-dom';
import Styled from 'styled-components';

export const MessageContainer = Styled.div`
    width: 70%;
    color: var(--background);
    font-family: 'Poppins', "sans-serif";
    text-align: center;
    margin: 10px 0;
    line-height: 1.4;

    @media(min-width: 768px) {
        width: 500px;
        display: flex;
        flex-direction: column;
        text-align: start;
        margin-left: 50px;
    }
`;

const Title = Styled.h1`
    font-size: 2.4rem;
    
    @media(min-width: 768px) {
        font-size: 2.6rem;
    }
`;

const Description = Styled.h2`
    font-weight: normal;
    margin: 10px 0;
`;

const Button = Styled(Link)`
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid var(--background-gray);
    height: 6rem;

    color: var(--background);
    text-decoration: none;
    border-radius: 0.8rem;
    font-size: 1.4rem;

    @media(min-width: 768px) {
        width: 200px;
    }
`;

export default function Message() {
    return(
        <MessageContainer>
            <Title>Somos apaixonados por inovação e fazemos disso nosso trabalho</Title>
            <Description>Sabemos que o trabalho em grupo é algo essencial para qualquer time, e conosco não seria diferente</Description>
            <Button to="/projetos">Projetos</Button>
        </MessageContainer>
    );
}