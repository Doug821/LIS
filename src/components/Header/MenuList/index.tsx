import Styled from 'styled-components';

const MenuList = Styled.ul`
    list-style: none;
    margin-left: 3rem;
    margin-top: 3rem;

    li {
        color: var(--background-gray);
        margin-bottom: 1rem;
        font-size: 1.6rem;
    }

    @media(min-width: 768px) {
            display: flex;
            margin: 0px;
            
            li {
                margin-left: 1rem;
                margin-bottom: 0;
                color: var(--background);
            }
        }
`;

export default MenuList;