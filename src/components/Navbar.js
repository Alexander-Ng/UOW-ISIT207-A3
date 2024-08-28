import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = ({ isLoggedIn, onLogout }) => {
  return (
    <nav className="menu-container">
        <input type="checkbox" aria-label="Toggle menu" />
        <span></span>
        <span></span>
        <span></span>
        <a href="/" className="menu-logo">
            <img src="https://www.pets-heaven.co.uk/img/pet-heaven/Pet-Heaven-Logo-transparnet-med.png" alt="Pet Heaven"/>
        </a>
        <h1><Link to="/">Pet Heaven</Link></h1>
        <div className='menu'>
            <ul>
                <li><Link to="/cats">Cats</Link></li>
                <li><Link to="/dogs">Dogs</Link></li>
                <li><Link to="/adopt">Adopt</Link></li>
                <li><Link to="/release">Release</Link></li>
                <li><Link to="/services">Services</Link></li>
                <li><Link to="/aboutus">About Us</Link></li>
            </ul>
            <ul>
                {!isLoggedIn && <li><Link to="/login">Login</Link></li>}
                {!isLoggedIn && <li><Link to="/signup">Register</Link></li>}
                {isLoggedIn && (
                    <li>
                        <button onClick={onLogout} className="logout-button">Logout</button>
                    </li>
                )}
            </ul>
        </div>
    </nav>
  );
};

export default Navbar;
