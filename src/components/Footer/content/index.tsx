import React from 'react';
import { FiInstagram, FiMail } from 'react-icons/fi';
import { GoLocation } from 'react-icons/go';
import { FaTwitter, FaFacebookF } from 'react-icons/fa';
import Styled from 'styled-components';

const Info = Styled.div`

`;

const FooterData = Styled.div`
    width: 100%;
    height: 160px;
    padding: 10px 0;
    text-align: center;
    color: var(--background);
    font-family: 'Poppins', sans-serif;
    `;

const Content = Styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;

    ${FooterData} {
        border-bottom: 1px solid var(--background-gray);
    }

`;

const Title = Styled.h1`
    font-size: 2.4rem;
    margin-bottom: 10px; 
`;

const List = Styled.ul`
    list-style: none;
    font-size: 1.6rem;
    width: 350px;

    li {
        line-height: 1.6;
    }
`;

const SocialNet = Styled.ul`
    list-style: none;
    width: 70%;
    display: flex;
    justify-content: space-between;
    height: 100px;
    align-items: center;
`;

const Link = Styled.a`
    text-decoration: none;
    font-family: 'Poppins', sans-serif;
    font-size: 1.6rem;
    color: var(--background);
    margin-left: 2px;

    transition: 0.2s;
    
    :hover {
        color: var(--background-gray);
    }
`;

const Icon = Styled.span`
    font-size: 1.6rem;
    color: var(--background);
    margin-right: 10px;
`;

const Email = Styled.a`
    color: var(--backround);
    text-decoration: none;

    transition: 0.2s;

    :hover {
        color: var(--background-gray);
    }
`;

const Rights = Styled.p`
    color: var(--background);
    font-family: 'Poppins', sans-serif;
    font-size: 1.6rem;
    height: 50px;
`;


export default function FooterContent() {
    return (
        <Content>
            <Info>
                <FooterData>
                    <Title>Apoio</Title>
                    <List>
                        <li>Universidade Federal Rural do Semi-Árido</li>
                        <li>Bacharelado em Tecnologia da informação</li>
                        <li>Bacharelado em Ciências da Computação</li>
                    </List>
                </FooterData>

                <FooterData>
                    <Title>Desenvolvedores</Title>
                    <List>
                        <li>Reudisman Rolim</li>
                        <li>Herson Douglas</li>
                        <li>Renan Santana</li>
                        <li>Emanuel Bruno</li>
                    </List>
                </FooterData>

                <FooterData>
                    <Title>Informações</Title>
                    <List>
                        <li>
                            <Icon>
                                <GoLocation />
                            </Icon>
                            Rodovia BR-226, s/n, Pau dos Ferros-RN, 59900-000
                        </li>
                        <li>
                            <Icon>
                                <FiMail />
                            </Icon>
                            <Email href="mailto: contato@lisufersa.com">
                                contato@lisufersa.com
                            </Email>
                        </li>
                    </List>
                </FooterData>
            </Info>
            <SocialNet>
                <li>
                    <Icon>
                        <FiInstagram />
                    </Icon>
                    <Link href="https://www.instagram.com/lis.ufersa">lis.ufersa</Link>
                </li>
                <li>
                    <Icon>
                        <FaTwitter />
                    </Icon>
                    <Link href="https://www.twitter.com/lis_ufersa">lis_ufersa</Link>
                </li>
                <li>
                    <Icon>
                        <FaFacebookF />
                    </Icon>
                    <Link href="https://www.facebook.com/lis.ufersa">lis.ufersa</Link>
                </li>
            </SocialNet>
            <Rights>@Todos os Direitos Reservados</Rights>
        </Content>
    );
}