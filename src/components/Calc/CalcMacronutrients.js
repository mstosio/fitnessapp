import React from 'react';
import { InputWrapper } from '../../layout/styled';
import { StyledError, StyledHeader, StyledButton, Form, StyledRadioInputWrapper, StyledRadioInput, StyledRadioInputLabel} from '../../layout/styled/index';



export const CalcMacronutrients = (props) => {

    return (
        <React.Fragment>
            <StyledHeader>What diet do your prefer?</StyledHeader>
            <Form action="" onSubmit={props.onFormSubmit}>
                <StyledRadioInputWrapper>
                    <StyledRadioInput type="radio" id="high-carb" name="diet-type" value="highcarb" onChange={props.handleChange}/>
                    <StyledRadioInputLabel htmlFor="high-carb"/>
                    <div>High carbs/Low Fat</div>
                </StyledRadioInputWrapper>
                <StyledRadioInputWrapper> 
                    <StyledRadioInput type="radio" id="low-carb" name="diet-type" value="lowcarb" onChange={props.handleChange}/>
                    <StyledRadioInputLabel htmlFor="low-carb"/>
                    <div>Low carbs/High Fat</div>
                </StyledRadioInputWrapper>
                <StyledRadioInputWrapper>
                    <StyledRadioInput type="radio" id="balanced-diet" name="diet-type" value="balanced" onChange={props.handleChange}/>
                    <StyledRadioInputLabel htmlFor="balanced-diet"/>
                    <div>Balanced</div>
                </StyledRadioInputWrapper>
                <StyledError>{props.dietError}</StyledError>
                <StyledButton type="submit" primary>Dalej</StyledButton>
            </Form>
        </React.Fragment>
    );
};

