import React from 'react';
import { StyledCalcOut } from '../layout/styled/index';
import { calculateBMI, calculateBmiRange } from '../../libs/Helpers';

class CalcOutput extends React.Component {
    state = {
        BMI: ""
    }

   
    componentDidUpdate(){
        const {weight, height } = this.props.informations;
        const currentBMI = calculateBMI(weight, height);

        if(this.state.BMI != currentBMI){
            this.setState({
                BMI: currentBMI
            });
        }
    }

    render() {
        const { BMI } = this.state;
      
        return (
                <StyledCalcOut>
            
                  <div>{this.state.BMI}</div>
                </StyledCalcOut>

        );
    }
}

export default CalcOutput;