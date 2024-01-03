function TitleContainer() {
	return (
		<>
			<div className='mainImageTitle'>
				<video width='100%' height='700px' autoPlay muted loop>
					<source src='/public/video/amarante_tours_1080.mp4' type='video/mp4' />
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
