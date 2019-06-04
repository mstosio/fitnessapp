import React from 'react';
import { StyledGroup, InputWrapper, GroupItem, Form, StyledRadioInput, StyledRadioInputLabel, StyledRadioInputWrapper } from '../layout/styled/index';
import Avatar from './Avatar';

class GenderSelect extends React.Component {
    render() {
        return (
            <StyledGroup>
                <GroupItem>
                    <Avatar src={"https://www.heartfoundation.org.au/images/elements/bmi-male-loop.gif"}></Avatar>
                    <StyledRadioInputWrapper>
                        <StyledRadioInput type="radio" id="gender-male" name="gendertype" value="male" onChange={this.props.handleChange} primary/>
                        <StyledRadioInputLabel htmlFor="gender-male" primary/>
                        <div>Male</div>
                    </StyledRadioInputWrapper>
                 
                </GroupItem>
              
                <GroupItem>
                    <Avatar src={"https://www.heartfoundation.org.au/images/elements/bmi-female-loop.gif"}></Avatar>
                    <StyledRadioInputWrapper>
                        <StyledRadioInput type="radio" id="gender-female" name="gendertype" value="female" onChange={this.props.handleChange}  primary/>
                        <StyledRadioInputLabel htmlFor="gender-female" primary/>
                        <div>Female</div>
                    </StyledRadioInputWrapper>
                    
                </GroupItem>
            </StyledGroup>
        );
    }
}

export default GenderSelect;