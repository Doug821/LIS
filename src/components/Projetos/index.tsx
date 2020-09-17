import React from 'react';
import Styled from 'styled-components';
import { PROJETOS } from '../../Data/Projetos';
import Card from '../ProjectCard';

const ProjectList = Styled.section`
    margin-top: 20px;
    font-family: 'Poppins', sans-serif;
    font-size: 1.6rem;
    line-height: 1.6;
`;

const ProjectName = Styled.h2`
    font-size: 1.6rem;
    color: var(--background-gray);
    margin: 10px 0;
    font-weight: normal; 
`; 

const Description = Styled.p`
    color: var(--background-gray);
    height: 150px;
    overflow: hidden;
`;

const Image = Styled.img`
    height: 300px;
    width: 100%;
`;

export default function Projetos() {
    return (
        <ProjectList>
            {
                PROJETOS.filter(p => p.featured === true).map((projeto) => {
                    return (
                        <Card key={projeto.name}>
                            <Image src={require(`../../assets/${projeto.image}`)} alt={projeto.name}/>
                            <ProjectName>
                                {projeto.name}
                            </ProjectName>
                            <Description>
                                {projeto.description}
                            </Description>
                        </Card>
                    );
                })
            }
        </ProjectList>
    );
}