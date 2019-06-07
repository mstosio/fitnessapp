import React, { useEffect, useState } from 'react';
import {  } from '../../layout/styledFood/index';
import edamam from '../../api/edamam';
import { ThemeProvider } from 'styled-components';
import  { theme }  from '../../layout/utils/theme';

const Dish = (props,  {match}) => {
        
     console.log(match);   
    
    useEffect(()=>{
       getDishInfo();
    });


    const getDishInfo = async () => {
        const response = await edamam.get('/search', {
            params: {
                q: 'high-protein',
                label: 'chicken'
            }
        });

        console.log(response);
    };

    return (
        <>  
            <ThemeProvider theme={theme}>
                <h2>Item</h2>
            </ThemeProvider>
        </>
    );
};

export default Dish;