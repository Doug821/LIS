import React from 'react';
import Styled from 'styled-components';
import Img from '../../assets/Home/inicio.svg';
import BannerImg from '../Header/BannerImg';
import Message from '../Header/BannerMessage';
import BannerMessage, { MessageContainer } from '../Header/BannerMessage';


const BannerContainer = Styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media( min-width: 768px) {
        display: grid;
        grid-template-columns: 3fr 2fr;
        grid-template-areas: 
            "message figure";

        & ${BannerImg} {
            grid-area: figure;
            justify-self: end;
        }

        & ${MessageContainer} {
            grid-area: message;
        }
`;

export default function Banner() {
    return (
        <BannerContainer>
            <BannerImg
                src={Img}
                alt="Imagem Home"
            />
            <Message/>
        </BannerContainer>
    )
};
