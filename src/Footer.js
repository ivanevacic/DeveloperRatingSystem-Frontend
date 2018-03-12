import React from 'react';
import './Footer.css';
import gitLogo from './images/githubLogo00.png';
import twitLogo from './images/twitterIcon00.png';
import fbLogo from './images/facebookIcon00.png';

const Footer = ({ onRouteChange }) => {
	return (
		<footer>
			<div className="copyright">
				<p><strong> &copy;</strong> 2018  <strong>Developers' Hub</strong></p>
			</div>

			<div className="socialIcons">
				<a target="blank" href="https://github.com/"> <img id="Git" src={gitLogo} alt="Github"/></a>
				<a target="blank" href="https://twitter.com"> <img id="Twitter" src={twitLogo} alt="Twitter"/> </a>
				<a target="blank" href="https://www.facebook.com"> <img src={fbLogo} id="Facebook" alt="Facebook"/> </a>
			</div>	
			{/*<div onClick={ () => onRouteChange('login')} className="addDev grow pointer">
							<img id="addImg2" src={adding} alt="Add Developers" /> Add Developers
						</div>*/}
		</footer>
	);
}

export default Footer;