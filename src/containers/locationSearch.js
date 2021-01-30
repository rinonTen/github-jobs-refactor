import React, { useContext } from 'react';
import { LocationSearch } from '../components';
import { Context } from '../context/globalContext';

export default function LocationSearchContainer() {
    const { state, dispatch, handleCheckbox } = useContext(Context);
     
    const { fulltime } = state;

    function searchFullTimeJobs(e) {
        if (e.target.checked) {
            dispatch({ type: "SET_JOBS", jobsData: [] })
            dispatch({ type: "SET_FULLTIME_VALUE", fulltime: !fulltime })
        } else if (!e.target.checked) {
            dispatch({ type: "SET_FULLTIME_VALUE", fulltime: !fulltime })
            dispatch({ type: "SET_JOBS", jobsData: [] })
        }
    }

    return (
        <LocationSearch>
            <LocationSearch.Checkbox id="full-time" type="checkbox" onChange={searchFullTimeJobs} location="Full time"/>
            <LocationSearch.Label htmlFor="location">Location:</LocationSearch.Label> 
            <LocationSearch.Input
                type="text"
                onChange={(e) => {
                    dispatch({ type: "SET_LOCATION_INPUT_VALUE", locationValue: `location=${e.target.value}` })
                }}
                placeholder="City, state, zip code or country"
             />
             <LocationSearch.Checkbox id="london" type="checkbox" onChange={handleCheckbox} location="London"/>
             <LocationSearch.Checkbox id="amsterdam" type="checkbox" onChange={handleCheckbox} location="Amsterdam"/>
             <LocationSearch.Checkbox id="new-york" type="checkbox" onChange={handleCheckbox} location="New York"/>
             <LocationSearch.Checkbox id="berlin" type="checkbox" onChange={handleCheckbox} location="Berlin"/>
        </LocationSearch>
    )
}
