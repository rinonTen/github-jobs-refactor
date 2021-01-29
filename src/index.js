import React from 'react'
import ReactDOM from 'react-dom';
import App from './app';
import { GlobalContext } from './context/globalContext';
import { GlobalStyles } from './globalStyles';

ReactDOM.render(
    <GlobalContext>
        <GlobalStyles />
        <App />
    </GlobalContext>
    ,
    document.getElementById("root"));