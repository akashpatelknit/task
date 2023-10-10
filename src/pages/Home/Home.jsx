import React from 'react';
import './Home.scss';
import About from '../About/About';
import Services from '../../components/services/Services';
import Fintech from '../fintech/Fintech';
import CaseStudies from '../case-studies/CaseStudies';
import Deepinspire from '../../components/Deepinspire/Deepinspire';
import Testimonial from '../Testimonial/Testimonial';
const Home = () => {
	return (
		<div className="home">
			<About />
			<Services />
			<Fintech />
			<CaseStudies />
			<Deepinspire />
			<Testimonial />
		</div>
	);
};

export default Home;
