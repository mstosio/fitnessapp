import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import  { theme }  from '../layout/utils/theme';
import { CalcBMR } from './CalcBMR';
import { StyledCalcDietInfo} from '../layout/styled/index';
import { CalcMacronutrients } from './CalcMacronutrients';
import { CalcMacronutrientsOutput } from './CalcMacronutrientsOutput';
import { calculateDailyCaloricDemand, calculateDailyMacro } from '../../libs/Helpers';


class CalcDietInfo extends React.Component {
    state = {
        BMR: '',
        isVisible: true,
        isOutputVisible: false,
        dietType: '',
        dietTypeError: '', 
        macros: {}, 
        rerender: true
    };
    

    changeMacros = (newBMR ,dietTypeMacros) => {
        this.setState({
            rerender: false,
            BMR: newBMR,
            macros: dietTypeMacros
        });
    }


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
                rerender: true,
                isVisible: false,
                isOutputVisible: true,
                macros: calculateDailyMacro(BMR, weight, dietType)
            });
        }
    }



    componentDidUpdate(){
        const { genderType, weight, height, activity} = this.props.informations;
        const currentBMR = calculateDailyCaloricDemand(genderType, weight, height, activity);
    
        if(this.state.BMR != currentBMR && this.state.rerender){
            this.setState({
                BMR: currentBMR,
                isVisible: true
            });
        }
    }
       
    render() {
        const { BMR,  isVisible, macros, isOutputVisible, rerender } = this.state;    
        let macronutrients,
            bmr;

        if(BMR != "" && isVisible && rerender){
            macronutrients = <CalcMacronutrients macro={BMR} dietError={this.state.dietTypeError} 
            weight={this.props.informations.weight} handleChange={this.handleChange} onFormSubmit={this.onFormSubmit}/>;
             bmr = <CalcBMR macro={BMR}></CalcBMR>;
        } else if (isOutputVisible) {
            macronutrients = <CalcMacronutrientsOutput changeMacros={this.changeMacros} macros={macros} BMR={BMR}></CalcMacronutrientsOutput>;
            bmr = <CalcBMR macro={BMR}></CalcBMR>;
        }

    

        return (
            <ThemeProvider theme={theme}>
                <StyledCalcDietInfo>
                    {bmr}
                    {macronutrients}
                </StyledCalcDietInfo>
            </ThemeProvider>
        );

    }
}

export default CalcDietInfo;
