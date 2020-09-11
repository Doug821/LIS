import React from 'react';
import Styled from 'styled-components';
import Img from '../../assets/Home/inicio.svg';
import BannerImg from '../Header/BannerImg';
import Message from '../Header/BannerMessage';


const BannerContainer = Styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
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
