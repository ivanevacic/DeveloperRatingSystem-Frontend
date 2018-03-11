 import React from 'react';
import './Viewboard.css';
import DeveloperCard from './DeveloperCard';


const Viewboard = ({ DevelopersData }) => {
	return (
		<div className="displayed">
			{
				DevelopersData.map((dev, i) => {
				return ( 
					<DeveloperCard 
					key={i} 
					ratings={DevelopersData[i].ratings} 
					id={DevelopersData[i].id} 
					name={DevelopersData[i].name} 
					prLink={DevelopersData[i].prLink} 
					jobTitle={DevelopersData[i].jobTitle}
					/>
				);
			  })
			}
		</div>
	);
}

export default Viewboard;