import React, { Component } from 'react';
import './DevDisplay.css';
import SearchBar from './SearchBar';
import Viewboard from './Viewboard';

class DevDisplay extends Component {
	constructor() {
		super()
		this.state= {
			DevelopersData: [],
			searchfield: ''
		}
	}

	componentDidMount() {
		fetch(`https://my-json-server.typicode.com/steadfast14/jsonserver1/posts`)
			.then(response => response.json())
			.then( users => {this.setState({ DevelopersData: users})});
	}

	onSearchChange = (event) => {
		this.setState({ searchfield: event.target.value })
	}

	render () {
		const filteredDevs = this.state.DevelopersData.filter(devData => {
			return devData.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
		})	
		if (this.state.DevelopersData.length === 0) {
			return <h1 style={{color: `white`}}>Loading</h1>
		}
		else {
			return (
				<div>
					<div className="profiles">
						<h1> DEVELOPER PROFILES </h1>
						<SearchBar className="SearchBar" searchChange={this.onSearchChange}/>
					</div>	
					<div className="Displaying">
						<Viewboard className="Viewboard" DevelopersData={filteredDevs}/>
					</div>
				</div>
			);
		}
	}
}

export default DevDisplay;