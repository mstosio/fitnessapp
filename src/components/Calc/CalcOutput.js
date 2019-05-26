import React from 'react';
import { StyledCalcOut } from '../layout/styled/index';

class CalcOutput extends React.Component {
    render() {

      

        return (
                
            <StyledCalcOut>{this.props.informations.activity}</StyledCalcOut>
        );
    }
}

export default CalcOutput;