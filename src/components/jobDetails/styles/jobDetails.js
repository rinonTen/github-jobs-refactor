import styled from 'styled-components';

const Container = styled.section`
 a {
    font-family: Poppins;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 21px; 
    color: #1E86FF
 }
`;
const Article = styled.article``;
const ArticleHeading = styled.h2`
    font-family: Poppins;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 21px; 
    text-transform: uppercase;
    color: #B9BDCF;
`;
const TextContainer = styled.div``;
const Link = styled.a``;
const ArticleParagraph = styled.p``;
const Header = styled.header`
    h2 {
        font-weight: bold;
        font-size: 24px;
        line-height: 28px;
        color: #334680;
    }

    p {
        border: 1px solid #334680;
        box-sizing: border-box;
        border-radius: 4px;
        max-width: 25%;
        padding: 4px;
        margin-bottom: 10px;
    }

    
`;

const Span = styled.span`
    font-weight: 500;
    font-size: 12px;
    line-height: 14px;
    color: #B7BCCE;
`;

const Frame = styled.div` 
        display: flex; 
        column-gap: 32px;
        margin-top: 32px;
        margin-bottom: 32px;
 
    img {
        width: 62px;
        height: 62px;   
    }
`;
const Group = styled.div``;
const Image = styled.img``;
export { Container, Article, ArticleHeading, TextContainer, Link, ArticleParagraph, Header, Span, Frame, Group, Image }