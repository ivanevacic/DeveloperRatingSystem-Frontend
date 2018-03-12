import React from 'react';
import './LoginButton.css';
import loginLogo from './images/login.png';

const LoginButton = ({ onRouteChange }) => {
	return (
		<div id="loginContainer">
			<img onClick={ () => onRouteChange('login')} id="loginImg" src={loginLogo} title="Login" alt="Login"/>
			<span onClick={ () => onRouteChange('login')} className="loginbutton"> <span id="shighlight">L</span><span id="shighlight">o</span><span id="shighlight">g</span><span id="shighlight">i</span><span id="shighlight">n</span><span id="shighlight">/</span><span id="shighlight"> S</span><span id="shighlight">i</span><span id="shighlight">g</span><span id="shighlight">n</span><span id="shighlight"> U</span><span id="shighlight">p</span> </span>
		</div>	
	);
}

export default LoginButton;