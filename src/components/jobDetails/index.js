import React from 'react';
import { Container, Article, ArticleHeading, TextContainer,  Link, ArticleParagraph, Header, Span, Frame, Group, Image} from './styles/jobDetails';


export default function JobDetails({children, ...restProps}) {
    return (
        <Container {...restProps}>
            {children}
        </Container>
    )
}

JobDetails.Article = function JobDetailsArticle({children, ...restProps}) {
    return <Article {...restProps}> {children}</Article>
}

JobDetails.Link = function JobDetailsLink({children, ...restProps}) {
    return <Link {...restProps}> {children}</Link>
}

JobDetails.ArticleHeading = function JobDetailsArticleHeading({children, ...restProps}) {
    return <ArticleHeading {...restProps}> {children}</ArticleHeading>
}

JobDetails.ArticleParagraph = function JobDetailsArticleParagraph({ children, ...restProps}) {
    return <ArticleParagraph {...restProps}> {children}</ArticleParagraph>
}
 
JobDetails.TextContainer = function JobDetailsTextContainer({dangerouslySetInnerHTML, ...restProps}) {
    return <TextContainer dangerouslySetInnerHTML={dangerouslySetInnerHTML} {...restProps} /> 
}

JobDetails.Header = function JobDetailsHeader({children, ...restProps}) {
    return <Header {...restProps}> {children}</Header>
}

JobDetails.Span = function JobDetailsSpan({children, ...restProps}) {
    return <Span {...restProps}> {children}</Span>
}

JobDetails.Frame = function JobDetailsFrame({children, ...restProps}) {
    return <Frame {...restProps}> {children}</Frame>
}

JobDetails.Group = function JobDetailsGroup({children, ...restProps}) {
    return <Group {...restProps}> {children}</Group>
}

JobDetails.Image = function JobDetailsImage({src, ...restProps}) {
    return <Image src={src} {...restProps} />
}


