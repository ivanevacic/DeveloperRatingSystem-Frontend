import React from 'react';
import './Adding.css';
import adding from './images/adding.png';

const Adding = ({ onRouteChange }) => {
	return(	
		<div onClick={ () => onRouteChange('login')} className="addDev1 grow pointer">
			<img  id="addImg" src={adding} alt="Add Developers" /> Add Developers
		</div>
	);
}

export default Adding;