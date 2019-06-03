import React from 'react';
import { InputWrapper } from '../layout/styled';



export const CalcMacronutrients = (props) => {

    

    return (
        <React.Fragment>
            <h2>What diet do your prefer?</h2>
            <form action="" onSubmit={props.onFormSubmit}>
                <InputWrapper>
                    <input type="radio" name="diet-type" value="highcarb" onChange={props.handleChange}/>
                    <label htmlFor="">High carbs/Low Fat</label>
                </InputWrapper>
                <InputWrapper> 
                    <input type="radio" name="diet-type" value="lowcarb" onChange={props.handleChange}/>
                    <label htmlFor="">Low carbs/High Fat</label>
                </InputWrapper>
                <InputWrapper>
                    <input type="radio" name="diet-type" value="balanced" onChange={props.handleChange}/>
                    <label htmlFor="">Balanced</label>
                </InputWrapper>
                <button type="submit">Dalej</button>
            </form>
        </React.Fragment>
    );
};

