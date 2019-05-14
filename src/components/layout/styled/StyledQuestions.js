import React from 'react';
import styled, { ThemeProvider } from 'styled-components';




export const StyledCalcQuestions = styled.div`
    grid-area: calc-questions;
    display: flex;
    height: 60vh;
    margin-top: 50px;
    padding-top: 25px;
    background-color: ${({theme}) => theme.colors.lightgray};
`;

export const StyledAvatar = styled.img`
    width: 75px;
    height: 75px;
    border-radius: 50%;
    border: 5px solid ${({theme}) => theme.colors.maingreen};
`;


export const StyledGroup = styled.div`
      display: flex;
        flex-direction: row;
        justify-content: space-around;
        list-style-type: none;
`;

export const GroupItem = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const InputWrapper = styled.div`
    display: flex;
    justify-content: center;
    text-transform: uppercase;
    padding-top: 25px;
`;


export const Form = styled.form`
    width: 100%;
`;