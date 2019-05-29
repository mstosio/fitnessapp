import React from 'react';
import CalcQuestions from './CalcQuestions';
import CalcDietInfo from './CalcDietInfo';
import CalcOutput from './CalcOutput';
import { CalcWrapper, StyledCalcList } from '../layout/styled/index';


class Calculator extends React.Component {

  state = {
    informations: {}
  }


  addInformations = info => {
    this.setState({
      informations: info
    });
  }

    render() {
      return (
        <CalcWrapper>
          <CalcQuestions addInformations={this.addInformations}/>
          <CalcDietInfo/>
          <CalcOutput informations={this.state.informations}/>
        </CalcWrapper>
      );
    }
  }

  export default Calculator;