import React from 'react';

export const CalcMacronutrientsOutput = (props) => {
    console.log(props);
    return (
        <ReactFragment>
            <div>{props.macros.proteins}</div>
            <div>{props.macros.carbs}</div>
            <div>{props.macros.fats}</div>
        </ReactFragment>
    );
};

