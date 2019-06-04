import React from 'react';
import { InputWrapper } from '../layout/styled';
import { StyledError, StyledHeader, StyledButton } from '../layout/styled/index';



export const CalcMacronutrients = (props) => {

    

    return (
        <React.Fragment>
            <StyledHeader>What diet do your prefer?</StyledHeader>
            <form action="" onSubmit={props.onFormSubmit}>
                <InputWrapper>
                    <input type="radio" name="diet-type" value="highcarb" onChange={props.handleChange}/>
                    <label htmlFor="">High carbs/Low Fat</label>
                </InputWrapper>
                <InputWrapper> 
                    <input type="radio" name="diet-type" value="lowcarb" onChange={props.handleChange}/>
                    <label htmlFor="">Low carbs/High Fat</label>
                </InputWrapper>
                <InputWrapper>
                    <input type="radio" name="diet-type" value="balanced" onChange={props.handleChange}/>
                    <label htmlFor="">Balanced</label>
                </InputWrapper>
                <StyledError>{props.dietError}</StyledError>
                <StyledButton type="submit" MacroButton>Dalej</StyledButton>
            </form>
        </React.Fragment>
    );
};

