import React from 'react';
import './Adddev.css';

const Adddev = () => {
	return (
		<div class="form">
			<input type="text" name="name" placeholder="Name"/>
			<input type="number" name="age" placeholder="Age"/>
			<input type="text" name="jobTitle" placeholder="Job Title"/>
			<div class="rating">
				<span id="first">☆</span><span id="second">☆</span><span id="third">☆</span><span id="fourth">☆</span><span id="fifth">☆</span>
			</div>
		</div>
	);
}

export default Adddev;