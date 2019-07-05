import React from 'react';
import CalcQuestions from './CalcQuestions';
import CalcDietInfo from './CalcDietInfo';
import { CalcWrapper } from '../../layout/styled/index';


class Calculator extends React.Component {

  state = {
    informations: {},
    isOutputVisible: false,
    isQuestionsVisible: false,
    isVisible: false
  }

    makeGainInvisible = () => {
      this.setState({
        isVisible: false
      });
    }

    makeQuestionsInvisible = (isQuestionsVisible) => {
      this.setState({
        isQuestionsVisible: isQuestionsVisible,
        isOutputVisible: true,
        isVisible: true
      });
 
    } 

    addInformations = info => {
      this.setState({
        informations: info,
        isQuestionsVisible: true,
        isOutputVisible: false
      });
    }

    render() {
      return (
        <CalcWrapper>
          <CalcQuestions addInformations={this.addInformations}/>
          <CalcDietInfo informations={this.state.informations} makeGainInvisible={this.makeGainInvisible} makeQuestionsInvisible={this.makeQuestionsInvisible} isVisible={this.state.isVisible} isQuestionsVisible={this.state.isQuestionsVisible} isOutputVisible={this.state.isOutputVisible}/>
        </CalcWrapper>
      );
    }
  }

  export default Calculator;