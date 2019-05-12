import React from 'react';
import { Nav, Logo } from '../styled/index';
import SignedInLinks from './SignedInLinks';


const Navbar = () => (
       <Nav>  
                <Logo to='/' >Hello</Logo>
                <SignedInLinks/>
        </Nav>
   
);

export default Navbar;