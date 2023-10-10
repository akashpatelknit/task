import React from 'react';
import './caseStudies.scss';
import { caseStudies } from '../../data/navdata';
import Button from '../../components/button/Button';
const CaseStudies = () => {
	return (
		<div className="case_study">
			<div className="heading">
				<span>Case Studies</span>
			</div>

			<div className="sub_heading">
				<span>Check out what we have done for our clients.</span>
			</div>
			{caseStudies.map((item) => (
				<div
					key={item.id}
					className={item.id % 2 === 1 ? 'card' : 'card reverse'}
				>
					<div className="card_left">
						<div className="image">
							<img src={item.imgUrl} alt="" />
						</div>
						<div className="card_left_text">
							<span>Country:United Kingdom</span>
							<span>Core tech:Node.js, Angular 9, AWS</span>
						</div>
					</div>
					<div className="card_right">
						<div className="right_lable">
							<span>{item.lable}</span>
						</div>
						<div className="right_heading">
							<span>{item.subheading}</span>
						</div>
						<div className="right_description">
							<span>{item.description}</span>
						</div>
						<div className="button">
							<Button text="Explore More" />
						</div>
					</div>
				</div>
			))}
		</div>
	);
};

export default CaseStudies;
