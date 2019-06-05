import React from 'react';
import { StyledGroup, InputWrapper, GroupItem, StyledRadioInput, StyledRadioInputLabel, StyledRadioInputWrapper, Form, StyledButton  } from '../layout/styled/index';

export const CalcDietType = (props) => {
    return (
        <StyledGroup>
        <GroupItem>
        <h2>You want to lose or gain weight?</h2>
            <InputWrapper>
                <Form onSubmit={props.handleSubmit}dietType>
                    <StyledRadioInputWrapper>
                        <StyledRadioInput type="radio" id="loseweight-input" name="dietType" value="loseWeight" onChange={props.handleChange}/>
                        <StyledRadioInputLabel htmlFor="loseweight-input"/>
                        <div>Lose</div>
                        </StyledRadioInputWrapper>
                    <StyledRadioInputWrapper>
                        <StyledRadioInput type="radio" id="gainweight-input" name="dietType" value="gainWeight" onChange={props.handleChange}/>
                        <StyledRadioInputLabel htmlFor="gainweight-input"/>
                        <div>Gain</div>
                    </StyledRadioInputWrapper>
                    <StyledButton type="submit">Dalej</StyledButton>
                </Form>
            </InputWrapper>
        </GroupItem>
    </StyledGroup>
    );  
};