import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Testimonial.scss';
import { carosal, testimonial } from '../../data/navdata';
import { GrFormNext, GrFormPrevious } from 'react-icons/gr';
const Testimonial = () => {
	const [previous, setPrevious] = useState(0);
	const [current, setCurrent] = useState(1);
	const [next, setNext] = useState(2);
	let len = testimonial.length;
	const handlechangePrevious = () => {
		if (previous <= 0) {
			setPrevious(len - 1);
			setCurrent(0);
			setNext(1);
		} else {
			setNext(current);
			setCurrent(previous);
			setPrevious(previous - 1);
		}
		setCurrent(previous);
		setNext(current);
	};
	const handlechangeNext = () => {
		if (next >= testimonial.length - 1) {
			setNext(2);
			setPrevious(0);
			setCurrent(1);
		} else {
			setPrevious(current);
			setCurrent(next);
			setNext(next + 1);
		}
	};
	console.log(previous, current, next);
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
							<img src={testimonial[previous]?.imgUrl} alt="" />
						</div>
					</div>
					<div className="description">
						<span>{testimonial[previous]?.description}</span>
					</div>
					<div className="name">
						<span>-{testimonial[previous]?.name}</span>
					</div>
				</div>
				<div className="item current">
					<div className="image">
						<div className="comma">
							<img src="./comma.png" alt="" />
						</div>
						<div className="photo">
							<img src={testimonial[current]?.imgUrl} alt="" />
						</div>
					</div>
					<div className="description">
						<span>{testimonial[current]?.description}</span>
					</div>
					<div className="name">
						<span>-{testimonial[current]?.name}</span>
					</div>
				</div>
				<div className="item next ">
					<div className="image">
						<div className="comma">
							<img src="" alt="" />
						</div>
						<div className="photo">
							<img src={testimonial[next]?.imgUrl} alt="" />
						</div>
					</div>
					<div className="description">
						<span>{testimonial[next]?.description}</span>
					</div>
					<div className="name">
						<span>-{testimonial[next]?.name}</span>
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
