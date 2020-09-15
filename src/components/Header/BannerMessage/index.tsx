import React from 'react';
import { Link } from 'react-router-dom';
import Styled from 'styled-components';
import { BannerProps } from '../Banner';

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

const Message: React.FC<BannerProps> = (props) => {
    return (
        <MessageContainer>
            <Title>{props.title}</Title>
            { props.description &&
                <Description>{props.description}</Description>
            }

            { props.buttonLink &&
                <Button to={props.buttonLink}>{props.buttonText}</Button>
            }
        </MessageContainer>
    );
}

export default Message;