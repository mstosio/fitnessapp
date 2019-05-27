import React from 'react';
import { StyledCalcQuestions, StyledGroup, InputWrapper, GroupItem, Form } from '../layout/styled/index';

class ActivitySelect extends React.Component {
    render() {
        return (
            <StyledGroup>
                <GroupItem>
                <h2>What's your Activity rate?</h2>
                    <InputWrapper>
                        <input type="radio" id="very-low-activity" name="activity" value="verylowactivity" onChange={this.props.handleChange}/>
                        <label htmlFor="very-low-activity">Very low</label>

                        <input type="radio" id="low-activity" name="activity" value="lowactivity" onChange={this.props.handleChange}/>
                        <label htmlFor="low-activity">Low</label>

                        <input type="radio" id="avarage-activity" name="activity" value="avarageactivity" onChange={this.props.handleChange}/>
                        <label htmlFor="avarage-activity">Avarage</label>

                        <input type="radio" id="high-activity" name="activity" value="highactivity"  onChange={this.props.handleChange}/>
                        <label htmlFor="high-activity">High</label>
                    </InputWrapper>
                </GroupItem>
            </StyledGroup>
        );
    }
}

export default ActivitySelect;