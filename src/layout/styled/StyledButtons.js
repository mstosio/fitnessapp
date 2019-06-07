import React from 'react';
import styled from 'styled-components';


export const StyledButton = styled.button`
  display: block;
  margin: ${props => props.primary ? "25px auto" : "0 auto"};
	background-color:#44c767;
	-moz-border-radius:28px;
	-webkit-border-radius:28px;
	border-radius:28px;
	border:1px solid #18ab29;
	display:inline-block;
	cursor:pointer;
	color:#ffffff;
	font-family:Arial;
	font-size:17px;
	padding:16px 31px;
	text-decoration:none;
	text-shadow:-1px 0px 9px #2f6627;
  }
  &:hover {
    background-color:#67b83b;
  }
  &:active {
    position:relative;
    top:1px;
`;

