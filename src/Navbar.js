import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';


const Navbar = () => {

    return (
        <div className='navbar'>
            <img src="./logo_long_black.svg" alt="logo" className='logo' />
        <div className='nav-links'>
            
            <Link to='/' className='nav-links' >Home</Link>
           
            <Link to='/contact' className='nav-links'>Contact</Link> 
            <Link to='/about' className='nav-links'>Trimite un mesaj</Link>
        </div>
        </div>
    );
}

export default Navbar;