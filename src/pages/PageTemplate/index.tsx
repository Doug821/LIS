import React from 'react';
import Footer from '../../components/Footer';
import Header from '../../components/Header/Container';

const PageTemplate: React.FC = (props) => {
    return (
        <div>
            <Header />
            {props.children}
            <Footer />
        </div>

    );
}

export default PageTemplate;