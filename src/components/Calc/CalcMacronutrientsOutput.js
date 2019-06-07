import React, {} from 'react';
import proteinIcon from '../../assets/icons/protein.svg';
import carbsIcon from '../../assets/icons/carbs.svg';
import fatsIcon from '../../assets/icons/fats.svg';
import { StyledIcon, StyledMacroWrapper, StyledMacros, StyledHeader, StyledCalcMacronutirentsOutput } from '../../layout/styled/index';
import { calculateNewMacros, calculateNewBMR } from '../../libs/Helpers';




export class CalcMacronutrientsOutput extends React.Component {
        state = { 
            
        }
  
    // handleOnChange = (event) => {
    //     this.setState({
    //         [event.target.name]: event.target.value
    //     });

       
    // }

    // handleSubmit = (event) => {
    //     event.preventDefault();
        
    //     let newBMR = calculateNewBMR(this.props.BMR, this.state.dietType);
    //     let dietTypeMacros = calculateNewMacros(this.props.macros, this.state.dietType);
      
    //     this.props.changeMacros(newBMR, dietTypeMacros);

       
    // };
    
    render(){
      
       
        return (
            <StyledCalcMacronutirentsOutput>
                <StyledHeader>In order to keep your weight, you should eat</StyledHeader>
                <StyledMacros>
                    <StyledMacroWrapper>
                        <StyledIcon src={proteinIcon} alt="Protein Icon"/>
                        <span>Proteins: {this.props.macros.proteins}</span>
                    </StyledMacroWrapper>
                    <StyledMacroWrapper>
                        <StyledIcon src={carbsIcon} alt="Carb Icon"/>
                        <span>Carbs: {this.props.macros.carbs}</span>
                    </StyledMacroWrapper>
                    <StyledMacroWrapper>
                        <StyledIcon src={fatsIcon} alt="Fats Icon Icon"/>
                        <span>Fats: {this.props.macros.fats}</span>
                    </StyledMacroWrapper>
                  
                </StyledMacros>
                
            </StyledCalcMacronutirentsOutput>
        );
    }
 
};

export default CalcMacronutrientsOutput;
