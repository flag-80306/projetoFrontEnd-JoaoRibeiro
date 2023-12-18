import React from 'react';
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from 'react-icons/bs';
function Slider({ data }) {
	return (
		<>
			<div className='sliderContainer'>
				<BsArrowLeftCircleFill className='arrow left-arrow' />
				{data.map((item, index) => {
					return <img src={item.src} alt={item.alt} key={index} className='sliderImages' />;
				})}
				<BsArrowRightCircleFill className='arrow right-arrow' />
				<span className='indicators'>
					{data.map((_, index) => {
						return <button key={index} onClick={null} className='indicator'></button>;
					})}
				</span>
			</div>
		</>
	);
}

export default Slider;
