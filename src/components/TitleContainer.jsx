import { useEffect, useState } from 'react';

function TitleContainer() {
	const [videoInfo, setVideoInfo] = useState({});

	async function getVideoData() {
		// const response = await fetch('/mockAPI/mockAPIVideo.json?url');
		const response = await fetch('/mockAPI/mockAPIVideo.json');
		const result = await response.json();

		console.log(result);
		console.log(result.video);
		setVideoInfo(result);
	}
	useEffect(function () {
		getVideoData();
	}, []);

	return (
		<>
			<div className='mainImageTitle'>
				<video width='100%' height='700px' autoPlay muted loop>
					{/* <source src='/public/video/intro.mp4' type='video/mp4' /> */}
					<source src={videoInfo?.video} type='video/mp4' />
					{/* <source src={videoInfo.video} type='video/mp4' /> */}
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
