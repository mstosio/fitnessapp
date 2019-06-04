import React from 'react';
import { StyledBMR, StyledHeader } from '../layout/styled/index';

export const CalcBMR = (props) => {
   
    return (
        <StyledBMR>
            <StyledHeader BMR>Your BMR is: </StyledHeader>
            <div>{props.macro}</div>
        </StyledBMR>
  
    );
};