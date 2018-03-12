import React from 'react';
import './Login.css';

const Login = ({ onRouteChange }) => {
	return (
		<div className="form">
			<form action="#" method="get">
				<div className="mainForm">
					<h1 className="cmpName2"><span id="hHighlighter1">D</span><span id="hHighlighter2">E</span><span id="hHighlighter3">V</span><span id="hHighlighter4">E</span><span id="hHighlighter5">L</span><span id="hHighlighter6">O</span><span id="hHighlighter7">P</span><span id="hHighlighter8">E</span><span id="hHighlighter9">R</span><span id="hHighlighter10">S</span><span id="hHighlighter11">'</span><span id="hHighlighter12"> H</span><span id="hHighlighter13">U</span><span id="hHighlighter14">B</span></h1>
					<span id="loginTxt1">Sign in</span>
					<p id="loginTxt2">with you Developers' Hub account</p> 
					<input id="uMail" type="email" name="userMail" placeholder="Enter Your Mail" required/>
					<input id="uPass" type="password" name="userPassword" placeholder="Enter Your Password" required/>
					<input onClick={ () => onRouteChange('view')} id="uSubmit" type="submit" value="LOGIN"/>
					<span id="or">OR </span> <span id="signUpTxt" onClick={ () => onRouteChange('signup')} > Sign Up</span>
				</div>
			</form>
		</div>
	); 
}

export default Login;