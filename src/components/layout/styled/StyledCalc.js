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
`;

