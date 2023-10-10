import React from 'react';
import './fintech.scss';
import Button from '../../components/button/Button';
const Fintech = () => {
	return (
		<div className="fintech">
			<div className="heading">
				<span>DeepInspire is a Fintech Expert</span>
			</div>
			<div className="description">
				<div className="text">
					<span>
						We specialize in full-cycle fintech software development
						from idea to implementation.
					</span>
				</div>
                <div className="button">
                    <Button text="Read More" />
                </div>
			</div>
		</div>
	);
};

export default Fintech;
