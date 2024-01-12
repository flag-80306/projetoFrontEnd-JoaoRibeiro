import { React, useState } from 'react';
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from 'react-icons/bs';
function ProfileSlide({ profile = [] }) {
	const [slide, setSlide] = useState(0);

	const NextSlide = () => {
		console.log('NextSlide clicked');
		setSlide(slide === profile.length - 1 ? 0 : slide + 1);
	};

	const PrevSlide = () => {
		console.log('PrevSlide clicked');
		setSlide(slide === 0 ? profile.length - 1 : slide - 1);
	};

	return (
		<>
			<div className='sliderContainer'>
				<BsArrowLeftCircleFill className='arrow left-arrow' onClick={PrevSlide} />
				{profile.map(({ name, photoSRC, photoALT, description, city, country }, index) => (
					<div key={index} className={slide === index ? 'slideProfile' : 'slideHiddenProfile'}>
						<h2>Hello, my name is {name}</h2>
						<img src={photoSRC} alt={photoALT} />
						<p>
							{description}
							<br />
							Originaly from: {city}, {country}
						</p>
					</div>
				))}
				<BsArrowRightCircleFill className='arrow right-arrow' onClick={NextSlide} />
				<span className='indicators'>
					{profile.map((_, index) => {
						return <button key={index} onClick={() => setSlide(index)} className={slide === index ? 'indicator' : 'indicator indicatorInactive'}></button>;
					})}
				</span>
			</div>
		</>
	);
}

export default ProfileSlide;
