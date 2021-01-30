import React from 'react'
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './app';
import { GlobalContext } from './context/globalContext';
import { GlobalStyles } from './globalStyles';

ReactDOM.render(
    <GlobalContext>
        <Router>
            <GlobalStyles />
            <App />
        </Router>
    </GlobalContext>
    ,
    document.getElementById("root"));