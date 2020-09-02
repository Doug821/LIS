import React from 'react';
import Footer from '../../Footer';
import Header from '../../Header';

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