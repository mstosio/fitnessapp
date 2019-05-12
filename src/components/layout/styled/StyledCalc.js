import React from 'react';
import styled from 'styled-components';



export const CalcWrapper = styled.div`
    display: grid;
    grid-gap: 20px;
    grid-templete-columns: 1fr 1fr;
    grid-templete-rows: auto;
    grid-template-areas: 
    'calc-out calc-diet calc-questions'
    'calc-out calc-diet calc-questions';
    padding: 0 150px;
`;

export const StyledCalcOut = styled.div`
    grid-area: calc-out;
`;

export const StyledCalcDietInfo = styled.div`
    grid-area: calc-diet;
`;

export const StyledCalcQuestions = styled.div`
    grid-area: calc-questions
`;