import Styled from 'styled-components'

const MenuIcon = Styled.div`
    font-size: 2rem;
    color: var(--background);

    @media(min-width: 768px) {
        display: none;
    }
`;

export default MenuIcon;