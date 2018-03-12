import React, { Component } from 'react';
import './App.css'; 
import Logo from './Logo';
import Cname from './Cname';
import LoginButton from './LoginButton';
import Footer from './Footer';
import Login from './Login';
import Signup from './Signup';
import DevDisplay from './DevDisplay';
import Adding from './Adding';
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
				? <div>
					 <div className="typewriter container">
						<Cname />
					 </div>
					 <LoginButton onRouteChange={this.onRouteChange}/>
				  </div>	
				: ( 
					this.state.route === 'login'
						? <Login onRouteChange={this.onRouteChange}/>
						: (
							this.state.route === 'signup'
							? <Signup onRouteChange={this.onRouteChange} />
							: (
								this.state.route === 'adddev'
								? <Adddev />
								: <div>
									<DevDisplay onRouteChange={this.onRouteChange}/>
									<Adding onRouteChange={this.onRouteChange}/>
								</div>
							)
						)
					)
				}
				<Footer onRouteChange={this.onRouteChange}/>
			</div>
		);
	}
}

export default App;