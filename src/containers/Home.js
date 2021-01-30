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
                            <Card.Image src="lll" alt="Icon" />
                            <Card.Date>{CalculateDate(created_at)}{CalculateDate(created_at) > 1 ? " days" : " day" } ago</Card.Date>
                        </Card.Article>
                    </Card.Group>
                </Card>
            </Link>
        </Card.Section>
    )
}
