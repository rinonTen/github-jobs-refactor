import React, { useContext } from 'react'
import { Containers, Loading } from '../components';
import ReactPaginate from 'react-paginate';
import { SectionContainer } from '../components/containers/styles/containers';
import { HeaderContainer, HomeContainer, LocationSearchContainer } from '../containers';
import { Context } from '../context/globalContext';

export default function Home() {
  const { state, perPage, pageCount, offset, setOffset  } = useContext(Context);
 
  const { allJobs, loading, paginationHidden } = state;
 

  const jobsElements = allJobs === [] || loading ?
    <Loading />
    :

    allJobs.slice(offset, offset + perPage).map((job) => {
      return <HomeContainer key={job.id} {...job}></HomeContainer>
    })
 
    const handlePageClick = (e) => {
      const selectedPage = e.selected; 
      setOffset(selectedPage + 1)
  };

  return (
    <>
      <Containers>
        <HeaderContainer />
        <LocationSearchContainer />
        <Containers.SectionContainer>
          {jobsElements}
        </Containers.SectionContainer>
        <Containers.SectionContainer>
        {
            paginationHidden == false &&
            <ReactPaginate
                previousLabel={"<"}
                nextLabel={">"}
                breakLabel={"..."}
                breakClassName={"break-me"}
                pageCount={pageCount}
                marginPagesDisplayed={1}
                pageRangeDisplayed={2}
                onPageChange={handlePageClick}
                containerClassName={"pagination"}
                subContainerClassName={"pages pagination"}
                activeClassName={"active"}
            />
            }
        </Containers.SectionContainer>
      </Containers>
    </>
  )
}
