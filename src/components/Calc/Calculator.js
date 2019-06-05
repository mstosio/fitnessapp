import React from 'react';
import CalcQuestions from './CalcQuestions';
import CalcDietInfo from './CalcDietInfo';
import CalcOutput from './CalcOutput';
import { CalcWrapper, StyledCalcList } from '../layout/styled/index';


class Calculator extends React.Component {

  state = {
    informations: {},
    isBack: true
  }

    checkIsBack = () => {
      this.setState({
        isBack: false
      });
    }

    addInformations = info => {
      
      this.setState({
        informations: info,
        isBack: true
      });
    }

    render() {
      return (
        <CalcWrapper>
          <CalcQuestions addInformations={this.addInformations}/>
          <CalcDietInfo informations={this.state.informations} isBack={this.state.isBack} clearState={this.clearState} isBack={this.state.isBack} checkIsBack={this.checkIsBack}/>
          <CalcOutput informations={this.state.informations}/>
        </CalcWrapper>
      );
    }
  }

  export default Calculator;