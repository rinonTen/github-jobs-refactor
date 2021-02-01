import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from '../components';
import { CalculateDate } from '../utils/date';

export default function HomeContainer({id, company_logo, company, title, type, location, created_at }) {
     
    return (
        <Card.Section>
            <Link to={`/${id}`}>
                <Card>
                    <Card.Group>
                        <Card.Image src={company_logo} alt={`${company}'s logo`} />
                        <Card.Article>
                            <Card.JobName>{company}</Card.JobName>
                            <Card.JobTitle>{title}</Card.JobTitle>
                            <Card.JobType>{type}</Card.JobType>
                        </Card.Article>
                    </Card.Group>
                    <Card.Group>
                        <Card.Article>
                            <Card.Image src="lll" alt="Icon" />
                            <Card.LocationName>{location}</Card.LocationName>
                        </Card.Article>
                        <Card.Article>
                            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"/><path d="M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z"/></svg>
                            <Card.Date>{CalculateDate(created_at)}{CalculateDate(created_at) > 1 ? " days" : " day" } ago</Card.Date>
                        </Card.Article>
                    </Card.Group>
                </Card>
            </Link>
        </Card.Section>
    )
}
