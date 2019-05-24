import React from 'react';
import { StyledCalcQuestions, StyledGroup, InputWrapper, GroupItem, Form } from '../layout/styled/index';

class ActivitySelect extends React.Component {
    render() {
        return (
            <StyledGroup>
                <GroupItem>
                <h2>What's your Activity rate?</h2>
                    <InputWrapper>
                        <input type="radio" id="very-low-activity" name="activity-rate" value="male"/>
                        <label htmlFor="very-low-activity">Very low</label>

                        <input type="radio" id="low-activity" name="gender-type" value="male"/>
                        <label htmlFor="low-activity">Low</label>

                        <input type="radio" id="avarage-activity" name="gender-type" value="male"/>
                        <label htmlFor="avarage-activity">Avarage</label>

                        <input type="radio" id="high-activity" name="gender-type" value="male"/>
                        <label htmlFor="high-activity">High</label>
                    </InputWrapper>
                </GroupItem>
            </StyledGroup>
        );
    }
}

export default ActivitySelect;