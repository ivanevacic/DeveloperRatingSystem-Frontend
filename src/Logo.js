import React from 'react';
import './Logo.css';
import logo from './images/Logo.png'

const Logo = ({ onRouteChange }) => {
	return (
		<img onClick={ () => onRouteChange('welcome')} id="logo" alt="Logo" src={logo} title="Home" />
	);
}

export default Logo;