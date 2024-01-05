import { useEffect, useState } from 'react';
function TitleContainer() {
	// const [info, setInfo] = useState({});

	// async function getTourInfo() {
	// 	const url = '../services/mockAPIService.json';
	// 	const response = await fetch(url);
	// 	const result = await response.json();

	// 	console.log(result);
	// 	setInfo(result);
	// 	console.log(result);
	// }
	// useEffect(function () {
	// 	getTourInfo();
	// }, []);

	return (
		<>
			<div className='mainImageTitle'>
				<video width='100%' height='700px' autoPlay muted loop>
					<source src='/video/amarante_tours_1080.mp4' type='video/mp4' />
					{/* <source src={info.video} type='video/mp4' /> */}
					Your browser do not support this promotional video about Inside Experiences.
				</video>

				<div className='mainTitle'>
					<h1>Amarante Experiences</h1>
					<h3>Discover With Locals</h3>
				</div>
			</div>
		</>
	);
}

export default TitleContainer;
