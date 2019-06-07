import React from 'react';
import {  } from '../layout/styledFood/index';
import { ThemeProvider } from 'styled-components';
import  { theme }  from '../layout/utils/theme';

const Dish = (props) => {
    console.log(props.image);
    return (
        <>  
            <ThemeProvider theme={theme}>
                <h2>Item</h2>
            </ThemeProvider>
        </>
    );
};

export default Dish;