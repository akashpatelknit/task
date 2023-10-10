import React from 'react';
import './services.scss';
const Services = () => {
	return (
		<div className="services">
			<div className="heading">
				<span>SERVICES</span>
			</div>
			<div className="service_grid">
				<div className="col grid_full">
					<div className="row main1 grid_full">
						<div className="imgage">
							<img src="./sub1.jpg" alt="" />
						</div>
						<div className="text">
							<span>IT Consulting</span>
						</div>
					</div>
					<div className="row main2 grid_full">
						<div className="imgage">
							<img src="./sub1.jpg" alt="" />
						</div>
						<div className="text">
							<span>Digital Transformation</span>
						</div>
					</div>
				</div>
				<div className="col">
					<div className="row sub grid_full">
						<div className="imgage">
							<img src="./sub1.jpg" alt="" />
						</div>
						<div className="text">
							<span>Discovery Phase</span>
						</div>
					</div>
					<div className="row sub grid_full">
						<div className="imgage">
							<img src="./sub2.jpg" alt="" />
						</div>
						<div className="text">
							<span>
								Technical due <br />
								Dilligence
							</span>
						</div>
					</div>
				</div>
				<div className="col ">
					<div className="row main1 main3 grid_full">
						<div className="imgage">
							<img src="./sub2.jpg" alt="" />
						</div>
						<div className="text">
							<span>
								Digital <br /> Transformation
							</span>
						</div>
					</div>
					<div className="row main2 main3 grid_full">
						<div className="imgage">
							<img src="./sub2.jpg" alt="" />
						</div>
						<div className="text">
							<span>
								Digital <br /> Transformation
							</span>
						</div>
					</div>
				</div>
				<div className="col">
					<div className="row sub grid_full">
						<div className="imgage">
							<img src="./sub3.jpg" alt="" />
						</div>
						<div className="text">
							<span>
								Digital <br />
								Transformation
							</span>
						</div>
					</div>
					<div className="row sub grid_full">
						<div className="imgage">
							<img src="./sub4.jpg" alt="" />
						</div>
						<div className="text">
							<span>
								Business <br />
								Intelligence
							</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Services;
