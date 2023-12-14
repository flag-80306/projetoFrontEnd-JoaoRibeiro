function TitleContainer() {
	return (
		<>
			<div className='homeImageTitle'>
				<video width='100%' height='700px' autoPlay muted loop>
					<source src='/video/amarante_tours_1080.mp4' type='video/mp4' />
					Seu navegador não suporta o elemento de vídeo.
				</video>

				<div className='homePageTitle'>
					<h1>Amarante Experiences</h1>
					<h4>Discover With Locals</h4>
				</div>
			</div>
		</>
	);
}

export default TitleContainer;
