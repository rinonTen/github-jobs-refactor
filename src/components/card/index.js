import React from 'react';
import {Section, Container, Group, Article, Image, JobName, JobTitle, JobType, Date, JobInfo, LocationName} from './styles/card'

export default function Card({children, ...restProps}) {
    return (
        <Container {...restProps}>
            {children}
        </Container>
    )
}

Card.Section = function CardSection({children, ...restProps}) {
    return <Section {...restProps}>{children}</Section>
}

Card.Article = function CardArticle({children, ...restProps}) {
    return <Article {...restProps}>{children}</Article>
}

Card.Image = function CardImage({src, ...restProps}) {
    return <Image src={src} {...restProps} />
}

Card.JobName = function CardJobName({children, ...restProps}) {
    return <JobName {...restProps}>{children}</JobName>
}

Card.JobTitle = function CardJobTitle({children, ...restProps}) {
    return <JobTitle {...restProps}>{children}</JobTitle>
}
 
Card.JobType = function CardJobType({children, ...restProps}) {
    return <JobType {...restProps}>{children}</JobType>
}
Card.Date = function CardDate({children, ...restProps}) {
    return <Date {...restProps}>{children}</Date>
}

Card.Group = function CardGroup({children, ...restProps}) {
    return <Group {...restProps}>{children}</Group>
}

Card.JobInfo = function CardJobInfo({children, ...restProps}) {
    return <JobInfo {...restProps}>{children}</JobInfo>
}

Card.LocationName = function CardLocationName({children, ...restProps}) {
    return <LocationName {...restProps}>{children}</LocationName>
}
 
