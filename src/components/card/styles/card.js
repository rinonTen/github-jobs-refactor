import styled from 'styled-components';
const Section = styled.section`
    @media(min-width: 1114px) { 
        margin-bottom: 32px; 
    }

    svg {
        width: 16px;
        height: 16px;
        margin-right: 5px;
    }
`;

const Group = styled.div`  
    display: flex; 
    justify-content: space-between;
    font-weight: 500;
    font-size: 12px;
    line-height: 14px;
    color: #B9BDCF; 
    margin-left: auto;

    & ~ & {
        max-width: 60%;
        justify-content: space-between;
        
        article {
            display: flex;
           p {
            font-weight: 500;
            font-size: 12px;
            line-height: 14px; 
            color: #B9BDCF;
           }
        }
    }
 
`;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    padding: 16px;
    padding-bottom: 0;
    margin-bottom: 16px;
    background: #FFFFFF;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.05);
    border-radius: 4px; 

    @media(min-width: 1114px) {
        flex-direction: row;
        align-items: flex-end;
        padding-bottom: 16px;

    }


    ${Group}:first-of-type {
        width: 100%; 
        display: grid;
        grid-template-columns: 30% 67%;
        grid-gap: 32px;

        @media(min-width: 1114px) {
            width: unset;
            grid-template-columns: auto auto;
            margin-top: 0;
            margin-left: 0;
            margin-right: auto;
        }
    }

    ${Group}:nth-of-type(2) {
        align-items: flex-end;
        margin-left: 38%;
        flex-basis: 30%;
        padding-top: 26px;
        padding-bottom: 16px;

        @media(min-width: 1114px) {
            margin-left: 0;
            padding-bottom: 8px;
        }

       article {
           display: flex;
           align-items: flex-end;

           img {
               width: unset;
               height: unset;
           }
       }
    }
`;

const Article = styled.article``;

const Image = styled.img`
    max-width: 100%;
    align-self: center;

    @media(min-width: 1114px) {
        width: 90px;
        height: 90px;
    }
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

    @media(min-width: 1114px){
        font-size: 18px;
        line-height: 21px;
    }

`;

const JobInfo = styled.div``;

const LocationName = styled.p``;

const Date = styled.p` 
`;

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