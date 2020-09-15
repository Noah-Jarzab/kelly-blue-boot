import React from 'react';
import logo from './images/logo.png';
import { Link } from 'react-router-dom';

const Header = () => {
	return (
		<nav className='navBar'>
			<Link to='/'>
				<img className='logo' src={logo} alt='logo' />
			</Link>
			<Link to='/shoes' style={{ textDecoration: 'none' }}>
				Browse Shoes
			</Link>
		</nav>
	);
};

export default Header;
