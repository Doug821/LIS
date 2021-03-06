import React from 'react';
import Styled from 'styled-components';
import Img from '../../assets/Home/inicio.svg';
import BannerImg from '../BannerImg';
import BannerMessage, { MessageContainer } from '../BannerMessage';


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

export interface BannerProps {
    imageSrc?: string;
    imageAlt?: string;
    title: string;
    description?: string;
    buttonLink?: string;
    buttonText?: string;
}

const Banner: React.FC<BannerProps> = (props) => {
    return (
        <BannerContainer>
        {props.imageSrc &&
            <BannerImg
                src={props.imageSrc}
                alt={props.imageAlt}
            />
        }
            <BannerMessage {...props}/>
        </BannerContainer>
    )
};

export default Banner;