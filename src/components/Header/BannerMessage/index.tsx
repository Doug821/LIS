import React from 'react';
import { Link } from 'react-router-dom';
import Styled from 'styled-components';

const MessageContainer = Styled.div`
    width: 70%;
    color: var(--background);
    font-family: 'Poppins', "sans-serif";
    text-align: center;
    margin: 10px 0;
    line-height: 1.4;
`;

const Title = Styled.h1`
    font-size: 2.4rem;
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
    height: 4rem;

    color: var(--background);
    text-decoration: none;
    border-radius: 0.8rem;
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