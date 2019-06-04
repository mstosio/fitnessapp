import React from 'react';
import { StyledCalcQuestions, StyledHeader, StyledButton, Form, StyledError } from '../layout/styled/index';
import styled, { ThemeProvider } from 'styled-components';
import  { theme }  from '../layout/utils/theme';
import  GenderSelect  from './GenderSelect';
import RangeInput  from './RangeInput';
import ActivitySelect from './ActivitySelect';


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
        let { genderError, activityError, rangeError } = "";

        if(this.state.gendertype === ''){
            genderError = 'Please, select your gender';
        }

        if(this.state.activity === ''){
            activityError = 'Please, select your activity';
        }

        if(this.state.weight < 30 || this.state.weight > 180){
            rangeError = 'Your height should be less then 180 and more then 30';
        }   

        if(this.state.height < 50 || this.state.height > 250){
            rangeError = 'Your weight should be less then 180 and more then 30';
        }


        if(genderError || activityError || rangeError){
            this.setState({genderError,  activityError, rangeError});
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
        const { genderError, rangeError, activityError} = this.state;

        return (
            <ThemeProvider theme={theme}>
                <StyledCalcQuestions >
         
                <StyledHeader>What's your BMI bro?</StyledHeader>
                    <Form action="" onSubmit={this.onFormSubmit}>

                        <GenderSelect handleChange={this.handleChange}></GenderSelect>
                        <StyledError>{genderError}</StyledError>

                        <RangeInput handleChange={this.handleChange}></RangeInput>
                        <StyledError>{rangeError}</StyledError>

                        <ActivitySelect handleChange={this.handleChange}/>
                        <StyledError>{activityError}</StyledError>

                        <StyledButton type="submit" primary>Oblicz</StyledButton>
                    </Form>
                </StyledCalcQuestions>
            </ThemeProvider>
        );
    }
}


export default CalcQuestions;