import React, { useState } from 'react';
import Styled from 'styled-components';
import { FiMenu } from 'react-icons/fi';
import { RiCloseFill } from 'react-icons/ri';
import MenuIcon from '../MenuIcon';
import MenuList from '../MenuList';

interface MenusProps {
    open?: boolean;
}

const MenuContainer = Styled.div`
    margin-left: 1.6rem;
    margin-right: 1.6rem;
    display: flex;
    flex: 1;

    
    & ${MenuIcon} {
        position: fixed;
        right: 20px;
        top: 20px;
        cursor: pointer;
    }
`;

const Menus = Styled.nav`
    background: var(--background);
    width: 200px;
    height: 100vh;
    position: fixed;
    right: 0;
    top: 0;
    transform: ${(props: MenusProps) => props.open ? 'translateX(0)' : 'translateX(100%)'};
    transition: transform 600ms;
    
    
    @media(min-width: 768px) {
        background: transparent;
        
        transform: none;
        display: flex;
        position: static;
        height: 100%;
        flex: 1;
        justify-content: space-between;
    }
`;

export default function Menu() {
    const [open, setOpen] = useState(false);
    return (
        <MenuContainer>
            {!open &&
                <MenuIcon open={open} onClick={() => setOpen(!open) }>
                    <FiMenu />
                </MenuIcon>
            }
            {open &&
                <MenuIcon open={open} onClick={() => setOpen(!open)}>
                    <RiCloseFill />
                </MenuIcon>
            }
            <Menus open={open}>
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