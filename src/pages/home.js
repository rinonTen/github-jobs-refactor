import React, { useContext } from 'react'
import { Containers, Loading } from '../components';
import { SectionContainer } from '../components/containers/styles/containers';
import { HeaderContainer, HomeContainer, LocationSearchContainer } from '../containers';
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
      <Containers>
        <HeaderContainer />
        <LocationSearchContainer />
        <Containers.SectionContainer>
          {jobsElements}
        </Containers.SectionContainer>
      </Containers>
    </>
  )
}
