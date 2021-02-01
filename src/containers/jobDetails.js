import React from 'react';
import { Link } from 'react-router-dom';
import { JobDetails } from '../components';
import { CalculateDate } from '../utils/date';


export default function JobDetailsContainer({jobDetails}) {
    return (
        <JobDetails>
            <JobDetails.Article>
                <Link to='/'>
                    ← Back to search
                </Link>
                <JobDetails.ArticleHeading >How to apply</JobDetails.ArticleHeading>
                <JobDetails.TextContainer dangerouslySetInnerHTML={{ __html: jobDetails.how_to_apply }}>
                {/* Please email a copy of your resume and online portfolio to wes@kasisto.com & CC eric@kasisto.com */}
                </JobDetails.TextContainer>
            </JobDetails.Article>
            <JobDetails.Article>
                <JobDetails.Header>
                    <JobDetails.ArticleHeading>{jobDetails.title}</JobDetails.ArticleHeading>
                    <JobDetails.ArticleParagraph>{jobDetails.type}</JobDetails.ArticleParagraph>
                    <JobDetails.Span>{CalculateDate(jobDetails.created_at) > 1 ? CalculateDate(jobDetails.created_at) + ' days' : CalculateDate(jobDetails.created_at) + ' day'} ago </JobDetails.Span>
                </JobDetails.Header>
                <JobDetails.Frame>
                    <JobDetails.Image src={jobDetails.company_logo} />
                    <JobDetails.Group >
                        <JobDetails.ArticleParagraph>{jobDetails.company}</JobDetails.ArticleParagraph>
                        <JobDetails.Span>{jobDetails.location}</JobDetails.Span>
                    </JobDetails.Group>
                </JobDetails.Frame>
                <JobDetails.Frame>
                     <JobDetails.TextContainer dangerouslySetInnerHTML={{ __html: jobDetails.description }}></JobDetails.TextContainer>
                </JobDetails.Frame>
            </JobDetails.Article>
        </JobDetails>
    )
}
