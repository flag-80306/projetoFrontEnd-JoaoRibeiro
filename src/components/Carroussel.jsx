import React, { useState } from 'react';
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from 'react-icons/bs';
function Carroussel({ data }) {
	const [slide, setSlide] = useState(0);

	const NextSlide = () => {
		setSlide(slide === data.length - 1 ? 0 : slide + 1);
	};

	const PrevSlide = () => {
		setSlide(slide === 0 ? data.length - 1 : slide - 1);
	};
	return (
		<>
			<div className='sliderContainer'>
				<BsArrowLeftCircleFill className='arrow left-arrow' onClick={PrevSlide} />
				{data.map((item, index) => {
					return <img src={item.src} alt={item.alt} key={index} className={slide === index ? 'slide' : 'slide slideHidden'} />;
				})}
				<BsArrowRightCircleFill className='arrow right-arrow' onClick={NextSlide} />
				<span className='indicators'>
					{data.map((_, index) => {
						return <button key={index} onClick={() => setSlide(index)} className={slide === index ? 'indicator' : 'indicator indicatorInactive'}></button>;
					})}
				</span>
			</div>
		</>
	);
}

export default Carroussel;
