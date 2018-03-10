import React, { Component } from 'react';
import './Home.css'; 
import gitLogo from './images/githubLogo00.png';
import twitLogo from './images/twitterIcon00.png';
import fbLogo from './images/facebookIcon00.png';
import devs from './images/devs.png';
import adding from './images/adding.png';

class Home extends Component {
	render() {
		return (
			<div>
				<div className="typewriter container">
					<h1 className="cmpName">DEVELOPERS' HUB</h1>
					<div className="viewDev">
						<img src={devs} alt="Developers" /> View Developers
					</div>
					<div className="addDev">
						<img src={adding} alt="Add" id="Add" /> Add Developers
					</div>
				</div>
				<footer>
					<div className="copyright">
						<p><strong> &copy;</strong> 2018  <strong>Company Name</strong></p>
					</div>
					<div className="socialIcons">
						<a target="blank" href="https://github.com/"> <img id="Git" src={gitLogo} alt="Github"/></a>
						<a target="blank" href="https://twitter.com"> <img id="Twitter" src={twitLogo} alt="Twitter"/> </a>
						<a target="blank" href="https://www.facebook.com"> <img src={fbLogo} id="Facebook" alt="Facebook"/> </a>
					</div>

					<div className="dev">
						<p className="devno"> 4923 </p> Developers
					</div>
				</footer>
			</div>
		);
	}
}

export default Home;