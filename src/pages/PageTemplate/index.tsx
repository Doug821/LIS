import React from 'react';
import Footer from '../../components/Footer/container';
import Header from '../../components/Header/Container';
import { BannerProps } from '../../components/Header/Banner';
import Container from '../../components/Container';

const PageTemplate: React.FC<BannerProps> = (props) => {
    return (
        <div>
            <Header {...props} />
            <Container>
                {props.children}
            </Container>
            <Footer />
        </div>

    );
}

export default PageTemplate;