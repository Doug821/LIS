import Styled from 'styled-components';

const Card = Styled.article`
    height: 600px;
    overflow: hidden;

    @media(min-width: 768px) {
        width: 47%;
    }
`;

export default Card;