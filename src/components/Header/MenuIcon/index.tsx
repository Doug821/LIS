import Styled from 'styled-components'

interface MenuIconProps {
    open: boolean;
}

const MenuIcon = Styled.div`
    font-size: 2rem;
    color: ${(props: MenuIconProps) => props.open ? 'var(--background-gray)' : 'var(--background)'};
    z-index: 1;

    @media(min-width: 768px) {
        display: none;
    }
`;

export default MenuIcon;