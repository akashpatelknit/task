import React from 'react';
import './About.scss';
import { about } from '../../data/navdata';
const About = () => {
	return (
		<div className="about">
			<div className="heading">
				<span>WHO WE ARE</span>
			</div>
			{about.map((about) => {
				return (
					<div className="text_container " key={about.id}>
						<div className="sub_heading">
							<span>{about.subheading}</span>
						</div>
						<div className="description">
							<span>{about.description}</span>
						</div>
					</div>
				);
			})}
			<div className="company_logo">
				<div className="logo_item" style={{ width: '100%' }}>
					<img
						src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Adobe_Systems_Logo_002.svg/1200px-Adobe_Systems_Logo_002.svg.png"
						alt="logo"
						style={{ width: '100%' }}
					/>
				</div>
				<div className="logo_item">
					<img src="./amazon.png" alt="logo" />
				</div>
				<div className="logo_item">
					<img src="./paypal.png" alt="logo" />
				</div>
				<div className="logo_item" style={{ width: '100%' }}>
					<img
						src="https://d6xcmfyh68wv8.cloudfront.net/newsroom-content/uploads/2021/02/white.png"
						alt="logo"
						style={{ width: '100%' }}
					/>
				</div>
				<div className="logo_item">
					<img src="./shopify.png" alt="logo" />
				</div>
				<div className="logo_item">
					<img src="./slack.png" alt="logo" />
				</div>
			</div>
		</div>
	);
};

export default About;
