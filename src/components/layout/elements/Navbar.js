import React from 'react';
import { Nav } from '../styled/index';
import { Link } from 'react-router-dom';
import SignedInLinks from './SignedInLinks';

const Navbar = () => (
        <Nav>
                <Link to='/' >Hello</Link>
                <SignedInLinks/> 
        </Nav>
);

export default Navbar;