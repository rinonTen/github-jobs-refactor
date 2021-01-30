import styled from 'styled-components';

const Input = styled.input`
        background: #FFFFFF;
        box-shadow: 0px 2px 4px rgb(0 0 0 / 5%);
        border-radius: 4px;
        margin-bottom: 16px;
        margin-left: 0;
        padding: 16px;
        border: none;
`;

const Container = styled.form`
    display: grid;

    input {
        padding: 16px;
    }
`;

const Label = styled.label`
    ::first-of-type {
        margin-bottom: 16px;
    }
`;

const Span = styled.span``;
const Checkbox = styled.div``;



export { Container, Label, Input, Span, Checkbox }