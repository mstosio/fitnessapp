import React from 'react';
import { StyledCalcQuestions, StyledHeader, StyledGroup, InputWrapper, GroupItem, Form } from '../layout/styled/index';
import styled, { ThemeProvider } from 'styled-components';
import  { theme }  from '../layout/utils/theme';
import  GenderSelect  from './GenderSelect';
import RangeInput  from './RangeInput';
import ActivitySelect from './ActivitySelect';


class CalcQuestions extends React.Component {
    state = {
        genderType: '',
        weight: '',
        height: '',
        activity: '',
        genderTypeError: '',
        weightError: '',
        heightError: '',
        activityError: ''
     }
  
    onFormSubmit = (event) => {
        event.preventDefault();
        event.target.gendertype.value;
        this.setState({
            genderType: event.target.gendertype.value,
            weight: event.target.weight.value,
            height: event.target.height.value,
            activity: event.target.activity.value

        });
    }

    render() {
        const { genderType } = this.state;
       
        return (
       
            <ThemeProvider theme={theme}>
                <StyledCalcQuestions>
                <StyledHeader>What's your BMI bro?</StyledHeader>
                    <Form action="" onSubmit={this.onFormSubmit}>
                        <GenderSelect></GenderSelect>
                        <RangeInput></RangeInput>
                        <ActivitySelect/>
                        <p>{genderType}</p>
                        <button type="submit" value="Submit">Oblicz</button>
                    </Form>
                </StyledCalcQuestions>
            </ThemeProvider>
        );
    }
}

export default CalcQuestions;