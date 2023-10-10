import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Navbar.scss';
import { RxHamburgerMenu } from 'react-icons/rx';
import { IoMdArrowDropdown } from 'react-icons/io';
import { navbar } from '../../data/navdata';
function Navbar() {
	const [click, setClick] = useState(false);

	const handleClick = () => setClick(!click);
	return (
		<>
			<nav className="navbar">
				<div className="nav-container">
					<div className="nav-logo">
						<NavLink exact to="/">
							Navbar
						</NavLink>
					</div>

					<ul className={click ? 'nav-menu active' : 'nav-menu'}>
						{navbar.map((nav) => {
							return !nav?.dropdown ? (
								<li className="nav-item" key={nav.id}>
									<NavLink
										exact
										to={nav.url}
										className="nav-links"
										onClick={handleClick}
									>
										{nav.title}
									</NavLink>
								</li>
							) : (
								<div className="nav_item">
									<div className="dropdown">
										Services
										<IoMdArrowDropdown />
										<div className="dropdown-content">
											<a href="#">Link 1</a>
											<a href="#">Link 2</a>
											<a href="#">Link 3</a>
										</div>
									</div>
								</div>
							);
						})}
					</ul>
					<div className="nav-icon" onClick={handleClick}>
						{click ? <RxHamburgerMenu /> : <RxHamburgerMenu />}
					</div>
				</div>
			</nav>
		</>
	);
}

export default Navbar;
