import React from 'react';
import { StyledCalcQuestions, StyledGroup } from '../layout/styled/index';
import Avatar from './Avatar';

class CalcQuestions extends React.Component {
    render() {
        
        return (
            <StyledCalcQuestions>
                <form action="">
                  
                        <StyledGroup>
                            <div>
                                <Avatar src={"https://yt3.ggpht.com/a/AGF-l790ZGzS4Qw4FWGGEp6MQHqbWjxxvVeJhF7_sA=s900-mo-c-c0xffffffff-rj-k-no"}></Avatar>
                                <input type="radio" id="gender-male" name="gender-type" value="male"/>
                                <label for="gender-male">Male</label>
                            </div>
                            <div>
                                <Avatar src={"https://yt3.ggpht.com/a/AGF-l790ZGzS4Qw4FWGGEp6MQHqbWjxxvVeJhF7_sA=s900-mo-c-c0xffffffff-rj-k-no"}></Avatar>
                                <input type="radio" id="gender-female" name="gender-type" value="female"/>
                                <label for="gender-female">Female</label>
                            </div>
                        </StyledGroup>
                  
                </form>
            </StyledCalcQuestions>
        );
    }
}

export default CalcQuestions;