import React from 'react';
import './Adding.css';
import adding from './images/addingblack.png';

const Adding = ({ onRouteChange }) => {
	return(	
		<div onClick={ () => onRouteChange('adddev')} className="addDev1 grow pointer">
			<img  id="addImg" src={adding} alt="Add Developers" title="Add Developers"/> {/*Add Developers*/}
		</div>
	);
}

export default Adding;