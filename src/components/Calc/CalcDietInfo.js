import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import  { theme }  from '../../layout/utils/theme';
import { CalcBMR } from './CalcBMR';
import { StyledCalcDietInfo} from '../../layout/styled/index';
import { CalcMacronutrients } from './CalcMacronutrients';
import { CalcMacronutrientsOutput } from './CalcMacronutrientsOutput';
import { calculateNewMacros, calculateNewBMR } from '../../libs/Helpers';
import { CalcDietType } from './CalcDietType';
import { calculateDailyCaloricDemand, calculateDailyMacro } from '../../libs/Helpers';


let initialState = {
        BMR: '',
        dietType: '',
        dietTypeError: '', 
        macros: {},
        dietGoalError: ''
};

class CalcDietInfo extends React.Component {
    state = initialState
    
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
    
    validateMacroForm = () => {
        let  dietGoalError = "";
   
        if(this.state.dietType === "loseWeight"){
            return true;
        }

        if(this.state.dietType === "gainWeight"){
            return true;
        }

        dietGoalError = 'Please, select what is your goal!';

        if(dietGoalError){
            this.setState({dietGoalError});
            return false;
        }

    }

  
    //zmiana nazwy + robi to samo co handleChange
    handleOnChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

  

    handleChange = (event) => {
        this.setState({
            dietType: event.target.value
        });
    }

      //zmiana nazwy
    handleSubmit = (event) => {
        event.preventDefault();
        const validation = this.validateMacroForm();

        if(validation){
            let newBMR = calculateNewBMR(this.state.BMR, this.state.dietType);
            let dietTypeMacros = calculateNewMacros(this.state.macros, this.state.dietType);

            this.props.makeGainInvisible();
            this.changeMacros(newBMR, dietTypeMacros);
        }
    };

    changeMacros = (newBMR ,dietTypeMacros) => {
        this.setState({ 
            BMR: newBMR,
            macros: dietTypeMacros
        });
    }


    onFormSubmit = event => {
        event.preventDefault();
        const {BMR, dietType } = this.state;
        const { weight } =  this.props.informations;
        const validation = this.validateForm();
       
        if(validation){
            this.props.makeQuestionsInvisible(false);
            this.setState({
                macros: calculateDailyMacro(BMR, weight, dietType)
            });
        }
    }

    shouldComponentUpdate(nextProps, nextState){
        return nextProps.informations != this.state.informations;
    }   

    
    componentDidUpdate(){
        const { genderType, weight, height, activity} = this.props.informations;
        const currentBMR = calculateDailyCaloricDemand(genderType, weight, height, activity);

        if(this.state.BMR != currentBMR && !this.props.isOutputVisible){
            this.setState({
                BMR: currentBMR
            });
        } 
    }
       
    render() {
        const { BMR, macros, isQuestionVisible, dietTypeError, dietGoalError } = this.state; 
        const { isQuestionsVisible, isOutputVisible, isVisible } = this.props;
        let macronutrients,
            bmr,
            inputDietType;
  
        if(isQuestionsVisible){
            macronutrients = <CalcMacronutrients macro={BMR} dietError={dietTypeError} 
            weight={this.props.informations.weight} handleChange={this.handleChange} onFormSubmit={this.onFormSubmit} isQuestionVisible={this.props.questionVisible}/>;
            bmr = <CalcBMR macro={BMR}></CalcBMR>;
        }
          
        if(isOutputVisible && isVisible){
            inputDietType = <CalcDietType dietGoalError={dietGoalError} handleSubmit={this.handleSubmit} handleChange={this.handleOnChange}></CalcDietType>;
        }

        if (isOutputVisible) {
            macronutrients = <CalcMacronutrientsOutput changeMacros={this.changeMacros} macros={macros} BMR={BMR}  isQuestionVisible={isQuestionVisible}></CalcMacronutrientsOutput>;
            bmr = <CalcBMR macro={BMR}></CalcBMR>;
        } 

        
        return (
            <ThemeProvider theme={theme}>
                <StyledCalcDietInfo>
                    {bmr}
                    {macronutrients}
                    {inputDietType}
                </StyledCalcDietInfo> 
            </ThemeProvider>
        );
    }
}

export default CalcDietInfo;
