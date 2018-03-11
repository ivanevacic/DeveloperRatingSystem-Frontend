import React from 'react';
import './Login.css';

const Login = ({ onRouteChange }) => {
	return (
			<div class="form">
				<input type="text" name="useNname" placeholder="UserName"/>
				<input onClick={ () => onRouteChange('adddev')} type="button" value="Login"/>
			</div>
	);
}

export default Login;