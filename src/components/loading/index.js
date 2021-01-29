import React from 'react';
import { Container, Text } from './styles/loading';

export default function Loading({children, ...restProps}) {
    return (
        <Container {...restProps}>
            <Text>Loading...</Text>
        </Container>
    )
}


