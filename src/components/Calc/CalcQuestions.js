import React from 'react';
import { StyledCalcQuestions } from '../layout/styled/index';
import Avatar from './Avatar';

class CalcQuestions extends React.Component {
    render() {
        
        return (
            <StyledCalcQuestions>
                <Avatar name={"bob"}></Avatar>
                <Avatar name={"jan"}></Avatar>
            
            </StyledCalcQuestions>
        );
    }
}

export default CalcQuestions;