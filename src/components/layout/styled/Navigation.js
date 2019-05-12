import React from 'react';
import styled from 'styled-components';
import { NavLink, Link } from 'react-router-dom';


export const Nav = styled.nav`
    background-color: #ffffffff;
    display: grid;
    grid-auto-flow: column;
    grid-gap: 20px;
    padding: 0 150px;
    text-transform: uppercase;
 
`;

export const Logo = styled(Link)`
    display: flex;
    align-items: center;
    color: #43cb83;
    text-decoration: none;
`;


export const NavList = styled.ul`
    display: grid;
    justify-content: end;  
    align-content: center;
    grid-auto-flow: column;
    grid-gap: 20px;
    color: white;
    
`;


export const StyledNavLink = styled(NavLink)`
    text-decoration: none;
`;





