import React from 'react';
import './Hero.scss';
const Hero = () => {
	return (
		<div className="hero">
			<div className="hero_main">
				<div className="left">
					<div className="box">
						<span>
							Product <br /> developement
						</span>
					</div>
				</div>
				<div className="middle">
					<div className="hero_desc">
						We Bridge the Gap between <br /> Business and Technology
					</div>
					<div className="banner">
						<img src="./hero.png" alt="hero" />
					</div>
				</div>
				<div className="right">
					<div className="box">
						<span>
							Digital <br />
							Transformation
						</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Hero;
