import React from 'react';
import { NavList, StyledNavLink } from '../styled/index';

const SignedInLinks = () => (

        <NavList>
            <StyledNavLink to='/home'>Home</StyledNavLink>
            <StyledNavLink to='/calculator'>Check</StyledNavLink>
        </NavList>
   
);

export default SignedInLinks;