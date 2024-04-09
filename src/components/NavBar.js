import React, { useState } from 'react';
import './navbar.css';
import Logo from '../assets/logos/logo.svg';

export const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>
            <div className={`navbar-container ${isOpen ? 'open' : ''}`}>
                <div className="navbar-logo">
                    <img src={Logo} alt="Logo" />
                </div>
                <div className='navbar-items-container'>
                    <div className="navbar-item">Talent finder </div>
                    <div className="navbar-item">For Recruiters</div>
                    <div className="navbar-item">For Employers</div>
                    <div className="navbar-item">About Us</div>
                    <div className="navbar-item">Company</div>
                </div>
                <div className="navbar-buttons-container">
                    <button className="navbar-button">Log in</button>
                    <button className="navbar-button purple-background">Get Started</button>
                </div>
                <div className="navbar-toggle" onClick={toggleNavbar}>
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                </div>
            </div>
        </div>
    );
};
