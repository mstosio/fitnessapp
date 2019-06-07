import React from 'react';
import { NavList, StyledNavLink } from '../../layout/styled/index';

const SignedInLinks = () => (

        <NavList>
            <StyledNavLink to='/home'>Home</StyledNavLink>
            <StyledNavLink to='/calculator'>Check</StyledNavLink>
            <StyledNavLink to='/food'>Food</StyledNavLink>
        </NavList>
   
);

export default SignedInLinks;