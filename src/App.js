import React, { Component } from 'react';
import './App.css'; 
import Logo from './Logo';
import Cname from './Cname';
import Viewing from './Viewing';
import Adding from './Adding';
import Footer from './Footer';
import Login from './Login';
import DevDisplay from './DevDisplay';
import Adddev from './Adddev';
import 'tachyons';

class App extends Component {
	constructor() {
		super();
		this.state = {
			Iname: '',
			Iemail: '',
			IjobTitle: '',
			Iratings: '',
			route: 'welcome'
		}
	}

	onRouteChange = (route) => {
		this.setState({route: route});
	};

	render() {
		return (
			<div>
				<Logo onRouteChange={this.onRouteChange} />
				{ this.state.route === 'welcome'
				? <div className="typewriter container">
					<Cname />
					<Viewing  onRouteChange={this.onRouteChange}/>
					<Adding onRouteChange={this.onRouteChange}/>
				</div>
				: ( 
					this.state.route === 'login'
					? <Login onRouteChange={this.onRouteChange}/>
					: (
						this.state.route === 'adddev'
						? <Adddev />
						: <DevDisplay onRouteChange={this.onRouteChange}/>
					)
				)
				}
				<Footer onRouteChange={this.onRouteChange}/>
			</div>
		);
	}
}

export default App;