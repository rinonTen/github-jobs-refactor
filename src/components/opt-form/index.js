import React from 'react';
import { Container, Form, Input, Button } from './styles/opt-form';

export default function Form({children, ...restProps}) {
    return (
        <Container {...restProps}>
            <Form>
                {children}
            </Form>
        </Container>
    )
}

Form.Input = function FormInput({placeholder, name, ...restProps}) {
    return <Input placeholder={placeholder} name={name} {...restProps}/>
}

Form.Button = function FormButton({placeholder, name, children, ...restProps}) {
    return <Button {...restProps}> {children} </Button>
}
