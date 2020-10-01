import React, { InputHTMLAttributes } from 'react';
import Styled from 'styled-components';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string;
    label: string;
}

const InputContainer = Styled.div`
    display: flex;
    flex-direction: column;
    margin: 10px 0;
`;

const Label = Styled.label`
    font-size: 1.6rem;
    margin-bottom: 10px;
    color: var(--background-dark);
`;

const InputBox = Styled.input`
    height: 6rem;
    border: 1px solid var(--border-color);
    border-radius: 0.8rem;
    padding-left: 20px; 
    color: var(--background-dark);
    `;

const Input: React.FC<InputProps> = ({name, label, ...rest}) => {
    return (
        <InputContainer>
            <Label htmlFor={name}>{label}</Label>
            <InputBox
                id={name}
                name={name}
                {...rest}
            />
        </InputContainer>
    );
}

export default Input;