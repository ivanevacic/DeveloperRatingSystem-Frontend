import React from 'react';
import './DeveloperCard.css';
import mypic from './images/githubLogo00.png'

const DeveloperCard = ({ratings, name, prLink, jobTitle}) => {
	return (
		<div className="dib br3 pa3 ma2 grow bw2 shadow-5" id="devCard">
			<img src={mypic} alt="Profile" id="devPic"/>
			<div id="devContent">
				<div id="ratings" className={`ratings`}><span id={`first${ratings}`}>☆</span><span id={`second${ratings}`}>☆</span><span id={`third${ratings}`}>☆</span><span id={`fourth${ratings}`}>☆</span><span id={`fifth${ratings}`}>☆</span></div>
				<div id="name">{name}</div>
				<div id="jobTitle">{jobTitle}</div>
				<div id="prLink">Projects: <a id="link" href={`${prLink}`}>Check Here</a></div>
			</div>
		</div>	
	);
} 

export default DeveloperCard;