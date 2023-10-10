import React from 'react';
import './Button.scss';
const Button = ({ text }) => {
	return (
		<div className="btn button">
			<button className="element">{text}</button>
		</div>
	);
};

export default Button;
