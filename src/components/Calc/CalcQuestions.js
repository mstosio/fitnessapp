import React from 'react';
import { StyledCalcQuestions, StyledHeader, StyledGroup, InputWrapper, GroupItem, Form } from '../layout/styled/index';
import styled, { ThemeProvider } from 'styled-components';
import  { theme }  from '../layout/utils/theme';
import  GenderSelect  from './GenderSelect';
import RangeInput  from './RangeInput';
import ActivitySelect from './ActivitySelect';
import { S_IFREG } from 'constants';


const initialState = {
    gendertype: '',
    activity: '',
    range: '',
    genderError: '',
    activityError: '',
    rangeError: ''
    
};

class CalcQuestions extends React.Component {
    state = initialState;

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    validateForm = () => {
        let { genderError, activityError } = "";

        if(this.state.gendertype === ''){
            genderError = 'Please, select your gender';
        }

        if(this.state.activity === ''){
            activityError = 'Please, select your activity';
        }

        if(genderError || activityError){
            this.setState({genderError,  activityError});
            return false;
        }
        return true;
    };

    onFormSubmit = (event) => {
        event.preventDefault();
        const checkValidation = this.validateForm();
        if(checkValidation){
            const informations = {
                genderType: event.target.gendertype.value,
                weight: event.target.weight.value,
                height: event.target.height.value,
                activity: event.target.activity.value
            };
            this.props.addInformations(informations);
            this.setState(initialState);
        } 
        
      }

    render() {
        return (
            <ThemeProvider theme={theme}>
                <StyledCalcQuestions>
         
                <StyledHeader>What's your BMI bro?</StyledHeader>
                    <Form action="" onSubmit={this.onFormSubmit}>
                        <GenderSelect handleChange={this.handleChange}></GenderSelect>
                        <div>{this.state.genderError}</div>
                        <RangeInput handleChange={this.handleChange}></RangeInput>
                        <ActivitySelect handleChange={this.handleChange}/>
                        <div>{this.state.activityError}</div>
                        <button type="submit">Oblicz</button>
                        <button onClick={this.props.greet}>bler</button>
                    </Form>
                </StyledCalcQuestions>
            </ThemeProvider>
        );
    }
}


export default CalcQuestions;