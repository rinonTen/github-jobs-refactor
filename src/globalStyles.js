import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    html, body {
    font-family: 'Roboto', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialised;
        -moz-osx-font-something: antialised;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 150%;
    color: #334680;
    margin: 0;
    padding: 0;
    background: #F6F7FB;
    }

    body {
        padding: 0;
    }

    a {
        text-decoration: none;
    }

    img {
        max-width: 100%;
    }

    p {
        margin: 0;
    }

    ul {
        list-style: none;
        padding: 0;
    }
`