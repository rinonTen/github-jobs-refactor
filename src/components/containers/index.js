import React from 'react';
import { Main, SectionContainer } from './styles/containers' 

export default function Containers({children, ...restProps}) {
    return (
        <Main {...restProps}>
            {children}
        </Main>
    )
}

Containers.SectionContainer = function ContainersSectionContainer({children, ...restProps}) {
    return <SectionContainer {...restProps}>{children}</SectionContainer>
}
