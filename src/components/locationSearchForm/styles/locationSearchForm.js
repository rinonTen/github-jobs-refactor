import styled from 'styled-components';

const Input = styled.input`
        background: #FFFFFF;
        box-shadow: 0px 2px 4px rgb(0 0 0 / 5%);
        border-radius: 4px;
        margin-bottom: 16px;
        margin-left: 0;
        margin-right: 12px;
        padding: 16px;
        border: none;
`;

const Checkbox = styled.div`
    :nth-of-type(1) {
        margin-bottom: 32px;
    }
`;

const Container = styled.form`
    display: grid;

    input {
        padding: 16px;
    }

   ${Checkbox}:first-of-type ~ label {
        font-weight: bold;
        font-size: 14px;
        line-height: 21px; 
        text-transform: uppercase;
        color: #B9BDCF;
    }
`;

const Label = styled.label`
    ::first-of-type {
        margin-bottom: 16px;
    }
`;

const Span = styled.span``;




export { Container, Label, Input, Span, Checkbox }