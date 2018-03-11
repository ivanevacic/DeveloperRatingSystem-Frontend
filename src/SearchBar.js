import React from 'react';
import './SearchBar.css';

const SearchBar = ({ searchfield, searchChange, onRouteChange }) => {
	return (
		<div className="pa2 searched">
			<input 
				className="searchBar"
				type="text" 
				placeholder="&#x1F50E; Search Developers" 
				onChange={searchChange}
			/>
		</div>
	);
}

export default SearchBar;