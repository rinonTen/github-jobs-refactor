import React, { useContext } from 'react'
import { Loading }from '../components';
import { HomeContainer } from '../containers';
import { Context } from '../context/globalContext';

export default function Home() {
  const { state } = useContext(Context);

  const { allJobs, loading } = state;

  const jobsElements = allJobs === [] || loading ?
    <Loading /> 
    :

    allJobs.map((job) => {
      return <HomeContainer key={job.id} {...job}></HomeContainer>
    })

  console.log(jobsElements)

  return (
    <>
      {jobsElements}
    </>
  )
}
