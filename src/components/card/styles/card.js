import styled from 'styled-components';
const Section = styled.section``;

const Group = styled.div`
    
`;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    padding: 16px;
    margin-bottom: 16px;
    background: #FFFFFF;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.05);
    border-radius: 4px;

    ${Group}:first-of-type {
        display: grid;
        grid-template-columns: 30% 67%;
        grid-gap: 32px;
    }

    ${Group}:last-of-type {
    display: flex;
    -webkit-box-pack: end;
    -webkit-justify-content: flex-end;
    -ms-flex-pack: end;
    justify-content: flex-end;
    font-weight: 500;
    font-size: 12px;
    line-height: 14px;
    color: #B9BDCF;
    margin-top: 32px;
    }
`;

const Article = styled.article``;

const Image = styled.img`
    max-width: 100%;
    align-self: center;
`;

const JobName = styled.h2`
    font-weight: bold;
    font-size: 12px;
    line-height: 14px;
    color: #334680;
    margin-bottom: 8px;
`;

const JobTitle = styled.p`
    font-size: 16px;
    line-height: 19px;
    color: #334680;
    margin-bottom: 8px;
`;

const Date = styled.p``;

const JobInfo = styled.div``;

const LocationName = styled.p``

const JobType = styled.p`
    border: 1px solid #334680;
    box-sizing: border-box;
    border-radius: 4px;
    font-size: 12px;
    line-height: 14px;
    color: #334680;
    margin-top: 16px;
    padding: 4px;
    max-width: 69px;
`;

export { Section, Container, Article, Image, JobName, JobTitle, JobType, Date, Group, JobInfo, LocationName };