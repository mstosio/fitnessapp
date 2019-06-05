import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import  { theme }  from '../layout/utils/theme';
import { CalcBMR } from './CalcBMR';
import { StyledCalcDietInfo} from '../layout/styled/index';
import { CalcMacronutrients } from './CalcMacronutrients';
import { CalcMacronutrientsOutput } from './CalcMacronutrientsOutput';
import { calculateDailyCaloricDemand, calculateDailyMacro } from '../../libs/Helpers';



let initialState = {
        BMR: '',
        isVisible: true,
        isOutputVisible: false,
        dietType: '',
        dietTypeError: '', 
        macros: {}, 
        rerender: true, 
        questionVisible: true
};

class CalcDietInfo extends React.Component {
    state = initialState
    
    changeMacros = (newBMR ,dietTypeMacros) => {
        this.props.checkIsBack();

        this.setState({
            rerender:  true, 
            BMR: newBMR,
            macros: dietTypeMacros,
            isQuestionVisible: false
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
                macros: calculateDailyMacro(BMR, weight, dietType),
                isQuestionVisible: true
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
        const { BMR,  isVisible, macros, isOutputVisible, rerender, isQuestionVisible } = this.state;    
        let macronutrients,
            bmr;

        if(BMR != "" && isVisible){
            macronutrients = <CalcMacronutrients macro={BMR} dietError={this.state.dietTypeError} 
            weight={this.props.informations.weight} handleChange={this.handleChange} onFormSubmit={this.onFormSubmit} isQuestionVisible={this.props.questionVisible}/>;
            bmr = <CalcBMR macro={BMR}></CalcBMR>;
        }
         
        if (isOutputVisible) {
            macronutrients = <CalcMacronutrientsOutput changeMacros={this.changeMacros} macros={macros} BMR={BMR}  isQuestionVisible={isQuestionVisible}></CalcMacronutrientsOutput>;
            bmr = <CalcBMR macro={BMR}></CalcBMR>;
        } 

    
        // if(isOutputVisible && !rerender && this.props.isBack){
        //     macronutrients = <CalcMacronutrients macro={BMR} dietError={this.state.dietTypeError} 
        //     weight={this.props.informations.weight} handleChange={this.handleChange} onFormSubmit={this.onFormSubmit} isQuestionVisible={this.props.questionVisible}/>;
        //     bmr = <CalcBMR macro={BMR}></CalcBMR>;
        // }

           
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
