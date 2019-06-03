import React from 'react';
import styled, { ThemeProvider } from 'styled-components';


export const InputWrapper = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    text-transform: uppercase;
    padding-top: 30px;
`;


export const StyledTextInput = styled.input`
    border-radius: 5px;
    background-color: #ffffff;
    outline: none;
    box-shadow: 1px solid gray;
    overflow: hidden
`;

export const StyledTextLabel = styled.label`
    position: absolute;
    top: 30px;
    right: 20px;
    font-size: 0.7rem;
    z-index: 99;
`;

export const StyledInputRange = styled.input`
   
  -webkit-appearance: none;
  width: 100%;
  margin: 8.65px 25px;

  &:focus {
  outline: none;
}
&::-webkit-slider-runnable-track {
  width: 100%;
  height: 9.7px;
  cursor: pointer;
  box-shadow: 2.1px 2.1px 1px #69b38d, 0px 0px 2.1px #7abc9a;
  background: #43cb83;
  border-radius: 0.4px;
  border: 0px solid #000101;
}
&::-webkit-slider-thumb {
  box-shadow: 0.7px 0.7px 1.1px #000000, 0px 0px 0.7px #0d0d0d;
  border: 0.9px solid #000000;
  height: 27px;
  width: 11px;
  border-radius: 6px;
  background: #ffffff;
  cursor: pointer;
  -webkit-appearance: none;
  margin-top: -8.65px;
}
&:focus::-webkit-slider-runnable-track {
  background: #63d498;
}
&::-moz-range-track {
  width: 100%;
  height: 9.7px;
  cursor: pointer;
  box-shadow: 2.1px 2.1px 1px #69b38d, 0px 0px 2.1px #7abc9a;
  background: #43cb83;
  border-radius: 0.4px;
  border: 0px solid #000101;
}
&::-moz-range-thumb {
  box-shadow: 0.7px 0.7px 1.1px #000000, 0px 0px 0.7px #0d0d0d;
  border: 0.9px solid #000000;
  height: 27px;
  width: 11px;
  border-radius: 6px;
  background: #ffffff;
  cursor: pointer;
}
&::-ms-track {
  width: 100%;
  height: 9.7px;
  cursor: pointer;
  background: transparent;
  border-color: transparent;
  color: transparent;
}
&::-ms-fill-lower {
  background: #32b46f;
  border: 0px solid #000101;
  border-radius: 0.8px;
  box-shadow: 2.1px 2.1px 1px #69b38d, 0px 0px 2.1px #7abc9a;
}
&::-ms-fill-upper {
  background: #43cb83;
  border: 0px solid #000101;
  border-radius: 0.8px;
  box-shadow: 2.1px 2.1px 1px #69b38d, 0px 0px 2.1px #7abc9a;
}
&::-ms-thumb {
  box-shadow: 0.7px 0.7px 1.1px #000000, 0px 0px 0.7px #0d0d0d;
  border: 0.9px solid #000000;
  height: 27px;
  width: 11px;
  border-radius: 6px;
  background: #ffffff;
  cursor: pointer;
  height: 9.7px;
}
&:focus::-ms-fill-lower {
  background: #43cb83;
}
&:focus::-ms-fill-upper {
  background: #63d498;
}


`;

export const StyledRadioInputWrapper = styled.div`
     display: flex;
     align-items: center;
     height: 48px;
     position: relative;
`;


export const StyledRadioInputLabel = styled.label`
  position: absolute;
  top: 25%;
  left: 4px;
  width: ${props => props.primary ? "24px" : "12px"};
  height: ${props => props.primary ? "24px" : "12px"};
  border-radius: 50%;
  background: white;
  border: 1px solid #bebebe;
`;

export const StyledRadioInput = styled.input`
  position: relative;
  opacity: 0;
  z-index: 1;
  border-radius: 50%;
  width: 22px;
  height: 22px;
  margin-right: 10px;
  &:hover ~ ${StyledRadioInputLabel} {
    background: #bebebe;
    &::after {
      position: relative;
      content: "";
      display: block;
      border-radius: 50%;
      width: 12px;
      height: 12px;
      margin: 5px;
      background: #eeeeee;
    }
  }
  &:checked + ${StyledRadioInputLabel} {
    background: #43cb83;
    border: 1px solid #43cb83;
    &::after {
      content: "";
      display: block;
      border-radius: 50%;
      width: 12px;
      height: 12px;
      margin: 5px;
      box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.1);
      background: white;
    }
  }
`;

