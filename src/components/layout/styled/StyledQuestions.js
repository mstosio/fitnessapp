import React from 'react';
import styled from 'styled-components';


export const StyledCalcQuestions = styled.div`
    color: #ffffff;
    flex-direction: column;
    grid-area: calc-questions;
    border-radius: 25px;
    align-self: center;
    justify-self: center;
    display: flex;
    flex-direction: column;
    width: 500px;
    background-color: ${({theme}) => theme.colors.lightgray};
`;

export const StyledHeader = styled.h2`
    display: flex;
    justify-content: center;
    font-size: 1.2rem;
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

export const StyledError = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    color: red;
`;


export const Form = styled.form`
    display: flex;
    flex-direction: column;
    width: 100%;
`;