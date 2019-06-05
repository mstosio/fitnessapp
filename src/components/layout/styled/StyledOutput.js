import React from 'react';
import styled from 'styled-components';


export const StyledCalcOut = styled.div`

    grid-area: calc-out;
    color: #ffffff;
    border-radius: 25px;
    height: 65vh;
    width: 100%;
    display: flex;
    justify-self: center;
    justify-content: center;
    align-self: center;
    flex-direction: column;
    width: 500px;
    background-color: gray;
    ${'' /* background-color: ${({theme}) => theme.colors.lightgray}; */}
`;

export const StyledCalcMacronutirentsOutput = styled.div`

`;

export const StyledMacros = styled.div`
    display: flex;
    justify-content: space-around;
`;

export const StyledIcon = styled.img`
    width: 50px;
    margin-bottom: 25px;
    height: 50px;
`;

export const StyledMacroWrapper = styled.div` 
    display: flex;
    align-items: center;
    flex-direction: column;
`;