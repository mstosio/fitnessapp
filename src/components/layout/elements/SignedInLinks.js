import React from 'react';
import { NavLink } from 'react-router-dom';
import { NavList, StyledNavLink } from '../styled/index';

const SignedInLinks = () => (

        <NavList>
            <StyledNavLink to='/'>Home</StyledNavLink>
            <StyledNavLink to='/'>Check</StyledNavLink>
        </NavList>
   
);

export default SignedInLinks;