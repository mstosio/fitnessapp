import React from 'react';
import { StyledDish, StyledImage, StyledDescription, StyledImageWrapper } from '../../layout/styledFood/index';
import { ThemeProvider } from 'styled-components';
import edamam from '../../api/edamam';
import  { theme }  from '../../layout/utils/theme';

const Dish = (props) => {


    return (
        <>  
            <ThemeProvider theme={theme}>
                <StyledDish>
                    <StyledImageWrapper>
                        <StyledImage src={props.image} alt=""/> 
                    </StyledImageWrapper>     
                    <StyledDescription>
                        <h2>{props.title}</h2>
                    </StyledDescription>
                </StyledDish>
            </ThemeProvider>
        </>
    );
};

export default Dish;