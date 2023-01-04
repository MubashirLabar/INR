import React from 'react';
import { NavLink } from 'react-router-dom';
import styleNavbar from './navbar.module.css';

const Navbar = () => {
	return (
		<nav className={styleNavbar.container}>
			<div>
				<NavLink to="/tv" className={styleNavbar.navlink} activeClassName={styleNavbar.selected}>
					TV
				</NavLink>
			</div>
			<div>
				<NavLink to="/radio" className={styleNavbar.navlink} activeClassName={styleNavbar.selected}>
					Radio
				</NavLink>
			</div>
		</nav>
	);
};
export default Navbar;
