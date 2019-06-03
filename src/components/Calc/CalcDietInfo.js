import React from 'react';
import { StyledCalcDietInfo } from '../layout/styled/index';
import { CalcMacronutrients } from './CalcMacronutrients';
import { calculateDailyCaloricDemand, calculateDailyMacro } from '../../libs/Helpers';

class CalcDietInfo extends React.Component {
    state = {
        BMR: '',
        isVisible: true,
        dietType: ''
    };
    

    handleChange = (event) => {
        this.setState({
            dietType: event.target.value
        });
    }

    onFormSubmit = event => {
        event.preventDefault();
        const {BMR, dietType } = this.state;
        const { weight } =  this.props.informations;

        this.setState({
            isVisible: false
        });

        calculateDailyMacro(BMR, weight, dietType);
    }
     
    componentDidUpdate(){
        const { genderType, weight, height, activity} = this.props.informations;
        const currentBMR = calculateDailyCaloricDemand(genderType, weight, height, activity);
    
        if(this.state.BMR != currentBMR){
            this.setState({
                BMR: currentBMR,
                isVisible: true
            });
        }
    }
       
    render() {
        const { BMR, dietType, isVisible } = this.state;    
        let input;

        if(BMR != "" && isVisible){
            input = <CalcMacronutrients macro={this.state.BMR} weight={this.props.informations.weight} handleChange={this.handleChange} onFormSubmit={this.onFormSubmit}/>;
        }

        return (
        
            <StyledCalcDietInfo>
                <div>{BMR}</div>
                {dietType}
                {input}
             
            </StyledCalcDietInfo>
        );


      
    }
}

export default CalcDietInfo;
