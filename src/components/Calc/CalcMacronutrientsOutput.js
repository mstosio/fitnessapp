import React, {} from 'react';
import proteinIcon from '../../assets/icons/protein.svg';
import carbsIcon from '../../assets/icons/carbs.svg';
import fatsIcon from '../../assets/icons/fats.svg';
import { StyledIcon, StyledMacroWrapper, StyledMacros, StyledHeader, StyledCalcMacronutirentsOutput } from '../layout/styled/index';
import { CalcDietType } from './CalcDietType';

export const CalcMacronutrientsOutput = (props) => {
    return (
        <StyledCalcMacronutirentsOutput>
            <StyledHeader>In order to keep your weight, you should eat</StyledHeader>
            <StyledMacros>
                <StyledMacroWrapper>
                    <StyledIcon src={proteinIcon} alt="Protein Icon"/>
                    <span>Proteins: {props.macros.proteins}</span>
                </StyledMacroWrapper>
                <StyledMacroWrapper>
                    <StyledIcon src={carbsIcon} alt="Carb Icon"/>
                    <span>Carbs: {props.macros.carbs}</span>
                </StyledMacroWrapper>
                <StyledMacroWrapper>
                    <StyledIcon src={fatsIcon} alt="Fats Icon Icon"/>
                    <span>Fats: {props.macros.fats}</span>
                </StyledMacroWrapper>
                <CalcDietType></CalcDietType>
            </StyledMacros>
        </StyledCalcMacronutirentsOutput>
    );
};

