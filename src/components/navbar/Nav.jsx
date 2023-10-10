import React, { useState } from 'react';
// import { Button } from './Button';
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css';
import Dropdown from './DropDown';
import { RxHamburgerMenu } from 'react-icons/rx';
function Navbar() {
	const [click, setClick] = useState(false);
	const [dropdown, setDropdown] = useState(false);

	const handleClick = () => setClick(!click);
	const closeMobileMenu = () => setClick(false);

	const onMouseEnter = () => {
		if (window.innerWidth < 960) {
			setDropdown(false);
		} else {
			setDropdown(true);
		}
	};

	const onMouseLeave = () => {
		if (window.innerWidth < 960) {
			setDropdown(false);
		} else {
			setDropdown(false);
		}
	};

	return (
		<>
			<nav className="navbar">
				<NavLink
					to="/"
					className="navbar-logo"
					onClick={closeMobileMenu}
				>
					Logo
				</NavLink>
				<div className="menu-icon" onClick={handleClick}>
					<RxHamburgerMenu />
				</div>
				<ul className={click ? 'nav-menu active' : 'nav-menu'}>
					<li className="nav-item">
						<NavLink
							to="/"
							className="nav-links"
							activeClassName="active-link"
							onClick={closeMobileMenu}
						>
							Fintech
						</NavLink>
					</li>
					<li
						className="nav-item"
						onMouseEnter={onMouseEnter}
						onMouseLeave={onMouseLeave}
					>
						<NavLink
							to="/services"
							className="nav-links"
							onClick={closeMobileMenu}
						>
							Services <i className="fas fa-caret-down" />
						</NavLink>
						{dropdown && <Dropdown />}
					</li>
					<li className="nav-item">
						<NavLink
							to="/expertise"
							className="nav-links"
							onClick={closeMobileMenu}
						>
							Experties
						</NavLink>
					</li>
					<li className="nav-item">
						<NavLink
							to="/case-studies"
							className="nav-links"
							onClick={closeMobileMenu}
						>
							Case studies
						</NavLink>
					</li>
					
					<li className="nav-item">
						<NavLink
							to="/about"
							className="nav-links"
							onClick={closeMobileMenu}
						>
							About us
						</NavLink>
					</li>
					<li className="nav-item">
						<NavLink
							to="/blog"
							className="nav-links"
							onClick={closeMobileMenu}
						>
							Blog
						</NavLink>
					</li>
					<li className="nav-item">
						<NavLink
							to="/contact-us"
							className="nav-links"
							onClick={closeMobileMenu}
						>
							Contact us
						</NavLink>
					</li>
				</ul>
				{/* <Button /> */}
			</nav>
		</>
	);
}

export default Navbar;
