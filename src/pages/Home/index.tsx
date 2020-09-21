import React from 'react';
import Styled from 'styled-components';
import PageTemplate from '../PageTemplate';
import HomeImg from '../../assets/Home/inicio.svg';
import Projetos from '../../components/Projetos';
import VideoDestaque from '../../components/VideoDestaque';
import SeeMoreButton from '../../components/SeeMoreButton';

const Title = Styled.h1`
    width: 100%;
    margin: 40px 0;
    font-family: 'Poppins', sans-serif;
    font-size: 2.4rem;
    text-align: center;
    color: var(--background-dark);
`;

export default function Home() {
    return (
        <PageTemplate
            imageSrc={HomeImg}
            imageAlt="Imagem principal"
            title="Somos apaixonados por inovação e fazemos disso nosso trabalho"
            buttonLink="/projetos"
            buttonText="Projetos"
        >
            <Title>
                Confira os nossos projetos recentes
            </Title>
            <Projetos />
            <SeeMoreButton to="./projetos">Mais projetos</SeeMoreButton>
            <Title>
                Vídeo em destaque
            </Title>
            <VideoDestaque />
            <SeeMoreButton to="./videos">Mais vídeos</SeeMoreButton>
        </PageTemplate>
    );
}