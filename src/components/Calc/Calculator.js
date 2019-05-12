import React from 'react';
import CalcQuestions from './CalcQuestions';
import CalcDietInfo from './CalcDietInfo';
import CalcOutput from './CalcOutput';
import { CalcWrapper } from '../layout/styled/index';


class Calculator extends React.Component {
    render() {
      return (
        <CalcWrapper>
          <CalcQuestions></CalcQuestions>
          <CalcDietInfo></CalcDietInfo>
          <CalcOutput></CalcOutput>
          </CalcWrapper>
      );
    }
  }

  export default Calculator;