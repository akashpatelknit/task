import React from 'react';
import './Footer.scss';
import { Link } from 'react-router-dom';
import { GrLinkNext } from 'react-icons/gr';
const Footer = () => {
	return (
		<div className="footer">
			<div className="left footer-link">
				<Link to="/">Information</Link>
				<Link to="/">FAQ</Link>
				<Link to="/">Blog</Link>
				<Link to="/">Support</Link>
			</div>
			<div className="middle">
				<div className="lable">Subscribe</div>
				<div className="input">
					<input
						type="email"
						name="email"
						placeholder="Email address"
					/>
					<div className="circle">
						<GrLinkNext />
					</div>
				</div>
				<div className="description">
					<span>
						Clutch ranks DeepInspire among Top FinTech Software
						Development Firms in 2021.
					</span>
				</div>
			</div>
			<div className="right footer-link">
				<Link to="/">Company</Link>
				<Link to="/">About Us</Link>
				<Link to="/">Careers</Link>
				<Link to="/">Contact Us</Link>
				<Link to="/">Lift Media</Link>
			</div>
		</div>
	);
};

export default Footer;
