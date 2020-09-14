import Styled from 'styled-components';

const BannerImg = Styled.img`
    width: 300px;
    padding: 10px 0;

    @media(min-width: 768px) {
        margin-right: 50px;
        width: 400px;
    }
`;

export default BannerImg;