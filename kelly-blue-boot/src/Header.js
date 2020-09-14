import React, { Component } from 'react';
import logo from './images/logo.png';
import { Link } from 'react-router-dom';

class Header extends Component {
    render() {
        return (
					<nav className='navBar'>
						<Link to='/'>
							<img className='logo' src={logo} alt='logo'/>
						</Link>
                        <Link to='/shoes' style={{textDecoration: 'none'}}>Browse Shoes</Link>
					</nav>
				);
    }
}

export default Header;