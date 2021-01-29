import React from 'react';
import { Container, Label, Input, Span, Checkbox } from './styles/locationSearchForm';

export default function LocationSearch({ children, ...restProps }) {
    return (
        <Container {...restProps}>
            {children}
        </Container>
    )
}

LocationSearch.Label = function LocationSearchLabel({ children, ...restProps }) {
    return <Label {...restProps}>{children}</Label>
}
LocationSearch.Input = function LocationSearchInput({onChange, ...restProps}) {
    return   <Input onChange={onChange} {...restProps} />
}
LocationSearch.Checkbox = function LocationSearchCheckbox({ htmlFor, onChange, id, type, location, ...restProps }) {
    return (
    <Checkbox>
        <Label htmlFor={htmlFor}>
            <Input onChange={onChange} id={id} type={type} location={location} {...restProps} />
            <Span {...restProps}>{location}</Span>
        </Label>
    </Checkbox>
    )
}


