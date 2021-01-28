import React from 'react'
import ReactDOM from 'react-dom';
import App from './app';
import { GlobalContext } from './context/globalContext';

ReactDOM.render(
    <GlobalContext>
        <App />
    </GlobalContext>
    ,
    document.getElementById("root"));