import React from 'react';
import styled from 'styled-components';
import { NavLink, Link } from 'react-router-dom';


export const Nav = styled.nav`
    background-color: #ffffffff;
    height: 100vh;
    width: 200px;
    display: flex;
    flex-direction: column;
    justifyc-content: center;
    padding: 0;
    text-transform: uppercase;
 
`;

export const Logo = styled(Link)`
    display: flex;
    align-items: center;
    justify-content: center;
    color: #43cb83;
    text-decoration: none;
`;


export const NavList = styled.ul`
    display: flex;
    flex-direction: column;
    justify-content: center;  
    color: white;
    
`;


export const StyledNavLink = styled(NavLink)`
    text-decoration: none;
`;





