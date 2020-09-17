import React from 'react';
import Styled from 'styled-components';
import Page from '../Page';

const PageContainer = Styled.main`
    width: 90%;
`;

const Container: React.FC = (props) => {
    return(
        <Page>
            <PageContainer>
                {props.children}
            </PageContainer>
        </Page>
    );
}

export default Container;