import React, { useEffect, useState, createContext } from 'react'
import Reducer from './reducer.js';
const Context = createContext();

const API_URL = "https://jobs.github.com/positions.json?";
const PROXI_URL = "https://cors-anywhere.herokuapp.com/";

function GlobalContext({ children }) {
  const { state, dispatch, perPage, pageCount, setPageCount, fetchJobs } = Reducer(PROXI_URL, API_URL);
  let {description, location, fulltime } = state;
  const [offset, setOffset] = useState(0);
  
  // Fetch jobs
let allJobsEndpoint = PROXI_URL + API_URL;

// Change the endpoint depending on the search.
//  At the begining, it will fetch all works

if(description !== "" ) {
  allJobsEndpoint = allJobsEndpoint + `description=${description}`;
} else{
  allJobsEndpoint = PROXI_URL + API_URL;
} 

 if(description !== "" && location !== "") {
  allJobsEndpoint = PROXI_URL + API_URL + `description=${description}` + "&" + `full_time=${fulltime}` + "&" + location;
} 
 if(description === "" && location !== "") {
  allJobsEndpoint = PROXI_URL + API_URL + `full_time=${fulltime}` + "&" + location;
} 


useEffect(() => {
  fetchJobs(allJobsEndpoint);
}, [offset, description, location, fulltime])
 
 
  function handleCheckbox(e) {
    if (e.target.checked) {
      dispatch({ type: "SET_JOBS", jobsData: [], loading: true})
      dispatch({ type: "SET_LOCATION_VALUE", location: `location=${e.target.id}` })
    } else if (!e.target.checked) {
      dispatch({ type: "SET_LOCATION_VALUE", location: "" })
      dispatch({ type: "SET_JOBS", jobsData: [], loading: true})
    }
  }
 
   
  return (
    <Context.Provider value={{ state, dispatch, handleCheckbox, pageCount, setPageCount, perPage, offset, setOffset, fetchJobs }}>
      {children}
    </Context.Provider>
  )
}

export { Context, GlobalContext };