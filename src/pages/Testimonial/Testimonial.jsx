import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Testimonial.scss';
import { carosal } from '../../data/navdata';
import { GrFormNext, GrFormPrevious } from 'react-icons/gr';
const Testimonial = () => {
	const [previous, setPrevious] = useState(0);
	const [current, setCurrent] = useState(1);
	const [next, setNext] = useState(2);
	const handlechangePrevious = () => {
		setPrevious(current);
		setCurrent(next);
		if (next === carosal.length - 1) {
			setNext(2);
		} else setNext(next + 1);
	};
	const handlechangeNext = () => {};
	console.log(carosal[previous]);
	return (
		<div className="testimonial">
			<div className="heading">
				<span>TESTIMONIAL</span>
			</div>
			<div className="images">
				<div className="item previous">
					<div className="image">
						<div className="comma">
							<img src="./comma.png" alt="" />
						</div>
						<div className="photo">
							{/* <img src={carosal[previous].url} alt="" /> */}
						</div>
					</div>
					<div className="description">
						<span>
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit. Obcaecati aliquam vero adipisci, libero ut in
							officiis a porro itaque veniam.
						</span>
					</div>
					<div className="name">
						<span>-Akash Patel</span>
					</div>
				</div>
				<div className="item current">
					<div className="image">
						<div className="comma">
							<img src="./comma.png" alt="" />
						</div>
						<div className="photo">
							<img src={carosal[previous].url} alt="" />
						</div>
					</div>
					<div className="description">
						<span>
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit. Obcaecati aliquam vero adipisci, libero ut in
							officiis a porro itaque veniam.
						</span>
					</div>
					<div className="name">
						<span>-Akash Patel</span>
					</div>
				</div>
				<div className="item next ">
					<div className="image">
						<div className="comma">
							<img src="" alt="" />
						</div>
						<div className="photo">
							{/* <img src={carosal[previous].url} alt="" /> */}
						</div>
					</div>
					<div className="description">
						<span>
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit. Obcaecati aliquam vero adipisci, libero ut in
							officiis a porro itaque veniam.
						</span>
					</div>
					<div className="name">
						<span>-Akash Patel</span>
					</div>
				</div>
			</div>
			<div className="buttons">
				<button onClick={handlechangePrevious}>
					<GrFormPrevious />
				</button>
				<button onClick={handlechangeNext}>
					<GrFormNext />
				</button>
			</div>
		</div>
	);
};

export default Testimonial;
