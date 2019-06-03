import React from 'react';
import { StyledCalcDietInfo } from '../layout/styled/index';
import { calculateDailyCaloricDemand } from '../../libs/Helpers';


class CalcDietInfo extends React.Component {



    test(){
      

        
    }
 

    componentDidUpdate(){
     
       
    }

    render() {
        const { genderType, weight, height, activity } = this.props.informations;
        

        return (
            <StyledCalcDietInfo>
             { calculateDailyCaloricDemand(genderType, weight, height, activity)}
            </StyledCalcDietInfo>
        );
    }
}

export default CalcDietInfo;