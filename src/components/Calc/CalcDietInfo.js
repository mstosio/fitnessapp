import React from 'react';
import { StyledCalcDietInfo } from '../layout/styled/index';
import { CalcMacronutrients } from './CalcMacronutrients';
import { calculateDailyCaloricDemand, calculateDailyMacro } from '../../libs/Helpers';

class CalcDietInfo extends React.Component {
    state = {
        BMR: '',
        isVisible: true,
        dietType: '',
        dietTypeError: '', 
        macros: {}
    };
    

    handleChange = (event) => {
        this.setState({
            dietType: event.target.value
        });
    }


    validateForm = () => {
        let  dietTypeError = "";

        if(this.state.dietType === ''){
            dietTypeError = 'Please, select your dietType';
        }

        if(dietTypeError){
            this.setState({dietTypeError});
            return false;
        }
        
        return true;
    };


    onFormSubmit = event => {
        event.preventDefault();
        const {BMR, dietType } = this.state;
        const { weight } =  this.props.informations;
        const validation = this.validateForm();

        if(validation){
            this.setState({
                isVisible: false,
                macros: calculateDailyMacro(BMR, weight, dietType)
            });
        }
    }


    displayMacros(macro){
        macros.map(macro => {
            <div>
                macro
            </div>;
        });
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
        const { BMR, dietType, isVisible, macros, dietTypeError } = this.state;    
        let input;

        if(BMR != "" && isVisible){
            input = <CalcMacronutrients macro={this.state.BMR} dietError={this.state.dietTypeError} weight={this.props.informations.weight} handleChange={this.handleChange} onFormSubmit={this.onFormSubmit}/>;
        }

        return (
        
            <StyledCalcDietInfo>
                <div>{BMR}</div>
                {input }

                    Proteins: {macros.proteins}
                    Carbs: {macros.carbs}
                Fats: {macros.fats}
                
            
            </StyledCalcDietInfo>
        );


      
    }
}

export default CalcDietInfo;
