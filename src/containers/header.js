import React, { useContext } from 'react'
import { Form, Header } from '../components';
import { Context } from '../context/globalContext';

export default function HeaderContainer() {

    const { dispatch } = useContext(Context)

    function searchJobs(e) {
        e.preventDefault();
        const descriptionSearchInput = e.target.description;
       
        dispatch({ type: "SET_JOBS", jobsData: [], loading: true})
        dispatch({type: "SET_DESCRIPTION", description: descriptionSearchInput.value})
    }

    return (
        <Header>
            <Header.Title>
                <span>GithBub </span>
                    Jobs
            </Header.Title>
            <Header.Frame>
                <Form>
                    <Form.SearchForm onSubmit={searchJobs}>
                        <Form.Input name="description" placeholder="Title, companies, expertise or benefits" />
                        <Form.Button>Search</Form.Button>
                    </Form.SearchForm>
                </Form>
            </Header.Frame>
        </Header>
    )
}
