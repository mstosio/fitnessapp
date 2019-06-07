import React from 'react';
import { StyledGroup, InputWrapper, GroupItem, StyledRadioInput, StyledRadioInputLabel, StyledRadioInputWrapper  } from '../../layout/styled/index';

class ActivitySelect extends React.Component {
    render() {
        return (
            <StyledGroup>
                <GroupItem>
                <h2>What's your Activity rate?</h2>
                    <InputWrapper>
                        <StyledRadioInputWrapper>
                            <StyledRadioInput type="radio" id="very-low-activity" name="activity" value="verylowactivity" onClick={this.props.handleChange}/>
                            <StyledRadioInputLabel htmlFor="very-low-activity"/>
                            <div>Very low</div>
                        </StyledRadioInputWrapper>
                        <StyledRadioInputWrapper>
                            <StyledRadioInput type="radio" id="low-activity" name="activity" value="lowactivity" onClick={this.props.handleChange}/>
                            <StyledRadioInputLabel htmlFor="low-activity"/>
                            <div>Low</div>
                        </StyledRadioInputWrapper>
                        <StyledRadioInputWrapper>
                            <StyledRadioInput type="radio" id="avarage-activity" name="activity" value="avarageactivity" onClick={this.props.handleChange}/>
                            <StyledRadioInputLabel htmlFor="avarage-activity"/>
                            <div>Avarage</div>
                        </StyledRadioInputWrapper>
                        <StyledRadioInputWrapper>
                            <StyledRadioInput type="radio" id="high-activity" name="activity" value="highactivity"  onClick={this.props.handleChange}/>
                            <StyledRadioInputLabel htmlFor="high-activity"/>
                            <div>High</div>
                        </StyledRadioInputWrapper>
                    </InputWrapper>
                </GroupItem>
            </StyledGroup>
        );
    }
}

export default ActivitySelect;