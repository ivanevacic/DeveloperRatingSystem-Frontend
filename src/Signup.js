import React from 'react';
import './Signup.css';

const Signup = ({ onRouteChange }) => {
	return (
		<div className="form0">
			<form action="#" method="get">
				<div className="mainForm0">
					<h1 className="cmpName2"><span id="hHighlighter1">D</span><span id="hHighlighter2">E</span><span id="hHighlighter3">V</span><span id="hHighlighter4">E</span><span id="hHighlighter5">L</span><span id="hHighlighter6">O</span><span id="hHighlighter7">P</span><span id="hHighlighter8">E</span><span id="hHighlighter9">R</span><span id="hHighlighter10">S</span><span id="hHighlighter11">'</span><span id="hHighlighter12"> H</span><span id="hHighlighter13">U</span><span id="hHighlighter14">B</span></h1>
					<span id="signupTxt1">Sign up</span>
					<p id="signupTxt2">with you Developers' Hub account</p> 
					<input id="uName0" type="text" name="userName0" placeholder="Name" required/>
					<input id="uAge0" type="number" min="18" max="150" name="userAge0" placeholder="Age" required/>
					<input id="uMail0" type="email" name="userMail0" placeholder="E-mail Address" required/>
					<input id="uPass0" type="password" name="userPassword0" placeholder="Enter A Password" required/>
					<input id="uPassConfirm0" type="password" name="userPasswordConfirm0" placeholder="Confirm Password" required/>
					<input onClick={ () => onRouteChange('view')} id="uSubmit0" type="submit" value="SIGNUP"/>
					<span id="or0">OR </span> <span id="loginTxt" onClick={ () => onRouteChange('login')} > Log In</span>
				</div>
			</form>
		</div>
	);
}

export default Signup;