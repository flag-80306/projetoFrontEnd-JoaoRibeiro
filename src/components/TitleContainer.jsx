import { useEffect, useState } from 'react';

function TitleContainer() {
	const [videoInfo, setVideoInfo] = useState('');

	async function getVideoData() {
		const response = await fetch('/mockAPI/mockAPIInfo.json');
		const result = await response.json();
		setVideoInfo(result.video);
	}

	useEffect(() => {
		getVideoData();
	}, []);

	function renderVideo() {
		if (videoInfo && videoInfo.video) {
			//se videoInfo existe vamos avançar para videoInfo.video
			return videoInfo.video; // Retorna o link do vídeo se existir
		} else {
			return '/video/AmaranteTours.mp4'; // Retorna um vídeo padrão se não houver informações do vídeo
		}
	}

	const videoSrc = renderVideo();

	return (
		<>
			<div className='mainImageTitle'>
				<video width='100%' height='700px' autoPlay muted loop>
					<source src={videoSrc} type='video/mp4' />
					Your browser does not support this promotional video about Inside Experiences.
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
