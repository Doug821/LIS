import React from 'react';
import Styled from 'styled-components';
import PageTemplate from '../PageTemplate';
import CreateAccountImg from '../../assets/images/createAccount.svg';
import Input from '../../components/Input';

const Form = Styled.form`
    font-family: 'Poppins', sans-serif;
    margin: 50px auto;
    width: 90%;
`;

const FieldSet = Styled.fieldset`
    border: none;
`;

const Legend = Styled.legend`
    font-size: 2.4rem;
    color: var(--primary-color);
`;

const NameContainer = Styled.div`

`;

const Photo = Styled.div`
    width: 150px;
    height: 150px;
    background: var(--border-color);
    border-radius: 50%;
    margin-top: 20px;
`;

const Name = Styled.div`

`;

export default function CreateAccount() {
    return (
        <PageTemplate
            imageSrc={CreateAccountImg}
            imageAlt="Imagem da página de criação de conta"
            title="Quase tudo pronto para se tornar um membro do grupo"
            description="Insira seus dados cadastrais nos campos abaixo"
        >
            <Form>
                <FieldSet>
                    <Legend>Seus Dados</Legend>
                    <NameContainer>
                        <Photo>

                        </Photo>
                        <Name>
                            <Input name="name" label="Nome"></Input>
                            <Input name="lastname" label="Sobreome"></Input>
                        </Name>
                    </NameContainer>
                </FieldSet>
            </Form>
        </PageTemplate>
    );
}