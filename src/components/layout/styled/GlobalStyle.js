import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';



const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        font-family: 'Montserrat';
    }

    *, *::before, *::after {
        box-sizing: border-box;
    }
`;



export default GlobalStyle;
