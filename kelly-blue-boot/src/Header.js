import React, { Component } from 'react';
import logo from './images/logo.png';
import { Link } from 'react-router-dom';

class Header extends Component {
    render() {
        return (
					<nav>
						<Link to='/'>
							<img src={logo} alt='logo'/>
						</Link>
					</nav>
				);
    }
}

export default Header;