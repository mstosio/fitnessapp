import React from 'react';
import { StyledCalcQuestions, StyledHeader, StyledGroup, InputWrapper, GroupItem, Form } from '../layout/styled/index';
import styled, { ThemeProvider } from 'styled-components';
import  { theme }  from '../layout/utils/theme';
import  GenderSelect  from './GenderSelect';
import RangeInput  from './RangeInput';
import ActivitySelect from './ActivitySelect';


class CalcQuestions extends React.Component {

   
    onFormSubmit = (event) => {
        event.preventDefault();
        alert("hello");
    }

    render() {
        
        return (
            <ThemeProvider theme={theme}>
                <StyledCalcQuestions>
                <StyledHeader>What's your BMI bro?</StyledHeader>
                    <Form action="" onSubmit={this.onFormSubmit}>
                 
                        <GenderSelect></GenderSelect>
                        <RangeInput></RangeInput>
                        <ActivitySelect/>
                        <button type="submit" value="Submit">Oblicz</button>
                    </Form>
                </StyledCalcQuestions>
            </ThemeProvider>
        );
    }
}

export default CalcQuestions;