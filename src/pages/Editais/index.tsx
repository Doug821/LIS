import React from 'react';
import PageTemplate from '../PageTemplate';
import EditaisImg from '../../assets/Editais/Editais.svg';

export default function Editais() {
    return (
        <PageTemplate
            imageSrc={EditaisImg}
            imageAlt="Imagem Editais"
            title="Editais"
            description="Acompanhe nossa postagem e fique por dentro do que rola aqui no LIS, e claro que tem aquele toque de aprendizagem!"
        >
            <h1>Editais</h1>
        </PageTemplate>
    );
}
