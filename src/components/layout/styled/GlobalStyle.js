import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';






const GlobalStyle = createGlobalStyle`
    body {
        background-color: #f0f1f6;
        margin: 0;
        padding: 0;
        font-family: 'Montserrat';
    }

    *, *::before, *::after {
        box-sizing: border-box;
    }
`;



export default GlobalStyle;
