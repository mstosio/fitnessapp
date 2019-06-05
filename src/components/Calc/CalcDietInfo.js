import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import  { theme }  from '../layout/utils/theme';
import { CalcBMR } from './CalcBMR';
import { StyledCalcDietInfo} from '../layout/styled/index';
import { CalcMacronutrients } from './CalcMacronutrients';
import { CalcMacronutrientsOutput } from './CalcMacronutrientsOutput';
import { calculateNewMacros, calculateNewBMR } from '../../libs/Helpers';
import { CalcDietType } from './CalcDietType';
import { calculateDailyCaloricDemand, calculateDailyMacro } from '../../libs/Helpers';



let initialState = {
        BMR: '',
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
        this.props.makeGainInvisible();
        this.setState({ 
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
        this.props.makeQuestionsInvisible(false);
        if(validation){
            this.setState({
                macros: calculateDailyMacro(BMR, weight, dietType)
            });
        }
    }


    handleOnChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });

       
    }

    handleSubmit = (event) => {
        event.preventDefault();
        
        let newBMR = calculateNewBMR(this.state.BMR, this.state.dietType);
        let dietTypeMacros = calculateNewMacros(this.state.macros, this.state.dietType);
      
        this.changeMacros(newBMR, dietTypeMacros);

    };


    componentDidUpdate(){
        const { genderType, weight, height, activity} = this.props.informations;
        const currentBMR = calculateDailyCaloricDemand(genderType, weight, height, activity);
    
        if(this.state.BMR != currentBMR){
            this.setState({
                BMR: currentBMR
            });
        } 
    }
       
    render() {
        const { BMR,  isVisible, macros, isOutputVisible, rerender, isQuestionVisible } = this.state;    
        let macronutrients,
            bmr,
            input;
  
        if(this.props.isQuestionsVisible){
            macronutrients = <CalcMacronutrients macro={BMR} dietError={this.state.dietTypeError} 
            weight={this.props.informations.weight} handleChange={this.handleChange} onFormSubmit={this.onFormSubmit} isQuestionVisible={this.props.questionVisible}/>;
            bmr = <CalcBMR macro={BMR}></CalcBMR>;
        }
          
        if(this.props.isOutputVisible && this.props.isVisible){
            input = <CalcDietType handleSubmit={this.handleSubmit} handleChange={this.handleOnChange}></CalcDietType>;
        }

        if (this.props.isOutputVisible) {
            macronutrients = <CalcMacronutrientsOutput changeMacros={this.changeMacros} macros={macros} BMR={BMR}  isQuestionVisible={isQuestionVisible}></CalcMacronutrientsOutput>;
            bmr = <CalcBMR macro={BMR}></CalcBMR>;
        } 

        
        return (
            <ThemeProvider theme={theme}>
                <StyledCalcDietInfo>
                    {bmr}
                    {macronutrients}
                    {input}
                </StyledCalcDietInfo>
               
            </ThemeProvider>
        );

    }
}

export default CalcDietInfo;
