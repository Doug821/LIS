import React from 'react';
import Footer from '../../components/Footer';
import Header from '../../components/Header/Container';
import { BannerProps } from '../../components/Header/Banner';

const PageTemplate: React.FC<BannerProps> = (props) => {
    return (
        <div>
            <Header {...props}/>
            {props.children}
            <Footer />
        </div>

    );
}

export default PageTemplate;