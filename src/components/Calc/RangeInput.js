import React from 'react';
import PropTypes from 'prop-types';
import { StyledGroup, InputWrapper, GroupItem, Form, StyledTextInput, StyledTextLabel, StyledInputRange } from '../../layout/styled/index';

class RangeInput extends React.Component {

    state = {
        height: 170,
        weight:  70
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
                        <StyledInputRange type="range" name="weight" min="30" max="180" value={this.state.weight} onChange={this.updateWeight}/>  
                        <StyledTextLabel htmlFor="weight-text">kg</StyledTextLabel>  
                        <StyledTextInput type="number" name="weight-text" id="" value={this.state.weight} getvalue={this.handleChange} onChange={this.updateWeight}/>
                    </InputWrapper>
                    <InputWrapper>
                        <label htmlFor="weight">Height</label>
                        <StyledInputRange type="range" name="height" min="120" max="225" value={this.state.height} onChange={this.updateHeight}/>
                        <StyledTextLabel htmlFor="height-text">cm</StyledTextLabel>  
                        <StyledTextInput type="number" name="height-text" id="" value={this.state.height} getvalue={this.handleChange} onChange={this.updateHeight}/>
                    </InputWrapper>
                </GroupItem>
            </StyledGroup>
        );
    }
}



export default RangeInput;

RangeInput.propTypes = {
    updateHeight: PropTypes.number,
    updateWeight: PropTypes.number,
    handleChange: PropTypes.func
};