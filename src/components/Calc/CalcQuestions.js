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
           const informations = {
                genderType: event.target.gendertype.value,
                weight: event.target.weight.value,
                height: event.target.height.value,
                activity: event.target.activity.value
            };
            
            this.props.addInformations(informations);
      }

    render() {
        // const { genderType, weight, height, activity } = this.state;
       
        return (
            <ThemeProvider theme={theme}>
                <StyledCalcQuestions>
                <StyledHeader>What's your BMI bro?</StyledHeader>
                    <Form action="" onSubmit={this.onFormSubmit}>
                        <GenderSelect ></GenderSelect>
                        <RangeInput></RangeInput>
                        <ActivitySelect/>
                        <button type="submit">Oblicz</button>
                        <button onClick={this.props.greet}>bler</button>
                    </Form>
                </StyledCalcQuestions>
            </ThemeProvider>
        );
    }
}


export default CalcQuestions;