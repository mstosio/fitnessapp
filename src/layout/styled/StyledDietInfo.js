import React from 'react';
import styled from 'styled-components';

export const StyledCalcDietInfo = styled.div`
    color: #ffffff;
    grid-area: calc-diet;
    align-self: center;
    border-radius: 25px;
    justify-self: center;
    background-color: ${({theme}) => theme.colors.lightgray};
    width: 500px;
    height: 65vh;
`;

export const StyledBMR = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 30%;
    align-items: center;
    font-size: 3rem;
    font-weight: bold;
`;

export const StyledCalcMacronutirentsOutput = styled.div`
    display: flex;
    flex-direction: column;
`;