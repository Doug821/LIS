import { Link } from 'react-router-dom';
import Styled from 'styled-components';

const SeeMoreButton = Styled(Link)`
    width: 90%;
    height: 6rem;
    margin: 10px auto;
    margin-bottom: 20px;
    
    display: flex;
    align-items: center;
    justify-content: center;
    
    border: 1px solid var(--background-gray);
    border-radius: 0.8rem;
    
    background: var(--primary-color);
    color: var(--background);

    text-decoration: none;
    font-family: 'Poppins', sans-serif;
    font-size: 1.4rem;

    @media(min-width: 768px) {
        width: 200px;
        margin-right: 0px;
    }
`;

export default SeeMoreButton;