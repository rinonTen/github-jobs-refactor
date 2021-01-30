import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from '../components';

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
                        <Card.LocationName>{location}</Card.LocationName>
                        <React.Fragment>
                            <Card.Image src="lll" alt="Icon" />
                            <Card.Date>{created_at}</Card.Date>
                        </React.Fragment>
                    </Card.Group>
                </Card>
            </Link>
        </Card.Section>
    )
}
