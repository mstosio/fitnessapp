import React from 'react';
import { StyledCalcQuestions, StyledGroup, InputWrapper, GroupItem, Form } from '../layout/styled/index';
import styled, { ThemeProvider } from 'styled-components';
import  { theme }  from '../layout/utils/theme';
import  GenderSelect  from './GenderSelect';


class CalcQuestions extends React.Component {
    render() {
        
        return (
            <ThemeProvider theme={theme}>
                <StyledCalcQuestions>
                    <Form action="">
                        <GenderSelect></GenderSelect>
                          
                    
                    </Form>
                </StyledCalcQuestions>
            </ThemeProvider>
        );
    }
}

export default CalcQuestions;