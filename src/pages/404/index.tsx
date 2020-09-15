import React from 'react';
import PageTemplate from '../PageTemplate';
import NotFound from '../../assets/404/Error404.svg';

export default function Error404 () {
    return (
        <PageTemplate
            imageSrc={NotFound}
            imageAlt="404 Image"
            title="Erro 404"
            description="Página não encontrada!"
        >
            <h1>Página não encontrada</h1>
        </PageTemplate>
    );
}