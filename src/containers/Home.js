import React from 'react'
import { Card } from '../components'

export default function HomeContainer() {
    return (
        <Card.Section>
            <Card>
                <Card.Group>
                    <Card.Image src={company_logo} alt={`${company}'s logo`} />
                    <Card.Article>
                        <Card.JobName className="job_company">{company}</Card.JobName>
                        <Card.JobTitle className="job_title">{title}</Card.JobTitle>
                        <Card.JobType className="job_type">{type}</Card.JobType>
                    </Card.Article>
                </Card.Group>
                </Card>
         </Card.Section>
    )
}
