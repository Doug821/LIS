import React from 'react';
import Styled from 'styled-components';
import { FiMenu } from 'react-icons/fi';
import MenuIcon from '../MenuIcon';
import MenuList from '../MenuList';

const MenuContainer = Styled.div`
    margin-left: 1.6rem;
    margin-right: 1.6rem;
    display: flex;
    flex: 1;

    
    & ${MenuIcon} {
        position: fixed;
        right: 20px;
        top: 10px;
    }
`;

const Menus = Styled.nav`
    background: var(--background);
    width: 200px;
    height: 100vh;
    position: fixed;
    right: 0;
    top: 0;
    
    
    @media(min-width: 768px) {
        background: transparent;
        
        display: flex;
        position: static;
        height: 100%;
        flex: 1;
        justify-content: space-between;
    }
`;

export default function Menu() {
    return (
        <MenuContainer>
            <MenuIcon>
                <FiMenu />
            </MenuIcon>
            <Menus>
                <MenuList>
                    <li>Início</li>
                    <li>Pesquisadores</li>
                    <li>Publicações</li>
                    <li>Projetos</li>
                    <li>Portfólio</li>
                    <li>Notícias</li>
                    <li>Editais</li>
                    <li>Parceiros</li>
                    <li>Contato</li>
                    <li>Sobre</li>
                </MenuList>
                <MenuList>
                    <li>Sair</li>
                    <li>Perfil</li>
                </MenuList>
            </Menus>
        </MenuContainer>
    );
}