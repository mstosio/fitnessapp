import React from 'react';
import { NavLink } from 'react-router-dom';
import { NavList } from '../styled/index';


const SignedOutLinks = () => (
        <NavList>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/'>Test</NavLink>
            <NavLink to='/'>Check</NavLink>
            <NavLink to='/'>Check</NavLink>
            <NavLink to='/'>Login</NavLink>
        </NavList>
);

export default SignedOutLinks;