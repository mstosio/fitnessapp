import React from 'react';
import styled from 'styled-components';



export const CalcWrapper = styled.div`
    display: grid;
    width: 100%;
    grid-gap: 20px;
    grid-templete-columns: 1fr 1fr;
    grid-templete-rows: auto;
    grid-template-areas: 
    'calc-questions calc-diet calc-out'
    'calc-questions calc-diet calc-out';
    padding: 0 50px;
`;

export const StyledCalcOut = styled.div`
    display: flex;
    flex-direction: column;
    grid-area: calc-out;
    align-self: center;
  justify-self: center;
`;

export const StyledCalcDietInfo = styled.div`
    grid-area: calc-diet;
    align-self: center;
  justify-self: center;
`;

