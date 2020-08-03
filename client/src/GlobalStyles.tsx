import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
    *, *::before, *::after {
        box-sizing: border-box;
        padding: 0; 
        margin: 0; 
    }

    html {
        width: 100%; 
        height: 100%;
    }

    body {
        width: 100%;
        height: 100%;
        font-family: 'Roboto', sans-serif;
    }

    #root {
        width: 100%; 
        height: 100%;
    }

    a {
        text-decoration: none;
    }

    iframe {
        border: 0;
        outline: 0;
    }
`