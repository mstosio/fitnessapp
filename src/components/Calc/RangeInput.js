import React from 'react';
import { StyledCalcQuestions, StyledGroup, InputWrapper, GroupItem, Form } from '../layout/styled/index';

class RangeInput extends React.Component {

    state = {
        height: '',
        weight: ''
    }

    updateHeight = (event) => {
        this.setState({
            height: event.target.value
        });
    }

    updateWeight = (event) => {
        this.setState({
            weight: event.target.value
        });
    }


    render() {
        return (
            <StyledGroup>
                <GroupItem>
                    <InputWrapper>
                        <label htmlFor="weight">Weight</label>
                        <input type="range" name="weight" min="30" max="180" value={this.state.weight} onChange={this.updateWeight}/>    
                        <input type="number" name="" id="" value={this.state.weight} onChange={this.updateWeight}/>
                    </InputWrapper>
                    <InputWrapper>
                        <label htmlFor="weight">Height</label>
                        <input type="range" name="height" min="120" max="225" value={this.state.height} onChange={this.updateHeight}/>
                        <input type="number" name="" id="" value={this.state.height} onChange={this.updateHeight}/>
                    </InputWrapper>
                </GroupItem>
            </StyledGroup>
        );
    }
}

export default RangeInput;