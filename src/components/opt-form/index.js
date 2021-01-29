import React, { useContext } from 'react';
import { Container, SearchForm, Input, Button } from './styles/opt-form';
 
export default function Form({children, ...restProps}) {

    return (
        <Container {...restProps}>
                {children}
        </Container>
    )
}
Form.SearchForm = function FormSearchForm({onSubmit, children, ...restProps}) {
    return <SearchForm {...restProps} onSubmit={onSubmit}> {children} </SearchForm>
}

Form.Input = function FormInput({placeholder, name, ...restProps}) {
    return <Input placeholder={placeholder} name={name} {...restProps}/>
}

Form.Button = function FormButton({placeholder, name, children, ...restProps}) {
    return <Button {...restProps}> {children} </Button>
}
