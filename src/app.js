import React from 'react';
import { Route, Switch } from 'react-router';
import  {Home, JobDetails} from './pages';

export default function App() {
    return ( 
        <>
            <Switch>
                <Route exact path="/">
                  <Home />
                </Route>
                <Route exact path="/:jobId">
                    <JobDetails />
                </Route>
            </Switch>
        </> 
    )
}
