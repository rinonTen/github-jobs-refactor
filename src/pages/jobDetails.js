import React, { useContext } from 'react';
import { useParams } from 'react-router';
import { Context } from '../context/globalContext';
import { JobDetailsContainer } from '../containers';

export default function JobDetails() {
    const { state } = useContext(Context);
    const { jobId } = useParams();
    const { allJobs } = state;

    const jobDetails = allJobs.length > 0 ? allJobs.find(job => job.id === jobId) : null;

    return (
        <>
            {
                jobDetails !== null &&
                <JobDetailsContainer jobDetails={jobDetails} />
            }
        </>

    )
}
