import React from 'react';
import './Viewing.css';
import devs from './images/devs.png';

const Viewing = ({ onRouteChange }) => {
	return(	
		<div onClick={ () => onRouteChange('view')} className="viewDev grow pointer" >
			<img id="viewingImg" src={devs} alt="Developers" /> View Developers
		</div>
	);
}

export default Viewing;