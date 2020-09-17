import React from 'react';
import PageTemplate from '../PageTemplate';
import HomeImg from '../../assets/Home/inicio.svg';
import Projetos from '../../components/Projetos';
import VideoDestaque from '../../components/VideoDestaque';

export default function Home() {
    return (
        <PageTemplate
            imageSrc={HomeImg}
            imageAlt="Imagem principal"
            title="Somos apaixonados por inovação e fazemos disso nosso trabalho"
            buttonLink="/projetos"
            buttonText="Projetos"
        >
            <Projetos/>
            <VideoDestaque/>
        </PageTemplate>
    );
}