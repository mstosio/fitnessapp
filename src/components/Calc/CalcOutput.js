import React from 'react';
import { StyledCalcOut } from '../layout/styled/index';

class CalcOutput extends React.Component {


    componentDidUpdate(props){
        console.log("hello1");
   
    }

    // countBMI = (props) => {
    //     console.log(this.props.informations.gender);
    // }

    componentDidMount(){
        console.log("hello");
    }


    
    render() {

        return (
                <StyledCalcOut>
                    Gender: {this.props.informations.gender}
                    Weight: {this.props.informations.weight}
                    Height: {this.props.informations.height}
                    Activity: {this.props.informations.activity}
                </StyledCalcOut>

        );
    }
}

export default CalcOutput;