import React from 'react';
import { StyledCalcQuestions, StyledGroup, InputWrapper, GroupItem, Form } from '../layout/styled/index';
import Avatar from './Avatar';

class GenderSelect extends React.Component {
    render() {
        return (
            <StyledGroup>
                <GroupItem>
                    <Avatar src={"https://www.heartfoundation.org.au/images/elements/bmi-male-loop.gif"}></Avatar>
                    <InputWrapper>
                        <input type="radio" id="gender-male" name="gendertype" value="male" onChange={this.props.handleChange}/>
                        <label htmlFor="gender-male">Male</label>
                    </InputWrapper>
                </GroupItem>
              
                <GroupItem>
                    <Avatar src={"https://www.heartfoundation.org.au/images/elements/bmi-female-loop.gif"}></Avatar>
                    <InputWrapper>
                        <input type="radio" id="gender-female" name="gendertype" value="female" onChange={this.props.handleChange}/>
                        <label htmlFor="gender-female">Female</label>
                    </InputWrapper>
                </GroupItem>
            </StyledGroup>
        );
    }
}

export default GenderSelect;