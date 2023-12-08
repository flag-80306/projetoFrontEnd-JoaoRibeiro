function App() {
	return (
		<>
			<div className='homeImageTitle'>
				<img src='../img/slide_2.JPG' alt='' />
				<div className='homePageTitle'>
					<h1>The Travel Blog</h1>
				</div>
			</div>
			<div className='secondTitle'>
				<h2>Latest</h2>
			</div>
			<div className='cardContainer'>
				<div className='card'>
					<a href='#'>
						<img src='https://picsum.photos/id/237/200' alt='arroz' className='cardImage' />
					</a>
					<div className='cardText'>
						<h3>Amarante</h3>
						<p>(icon) 13/10/2020</p>
					</div>
				</div>
				<div className='card'>
					<img src='https://picsum.photos/id/237/200' alt='arroz' className='cardImage' />
					<div className='cardText'>
						<a href='#' className='cardText'>
							<h3>Amarante</h3>
						</a>
						<p>(icon) 13/10/2020</p>
					</div>
				</div>
				<div className='card'>
					<a href='#'>
						<img src='https://picsum.photos/id/237/200' alt='arroz' className='cardImage' />
						<div className='cardText'>
							<h3>Amarante</h3>
							<p>(icon) 13/10/2020</p>
						</div>
					</a>
				</div>
				<div className='card'>
					<a href='#'>
						<img src='https://picsum.photos/id/237/200' alt='arroz' className='cardImage' />
						<div className='cardText'>
							<h3>Amarante</h3>
							<p>(icon) 31/10/1985</p>
						</div>
					</a>
				</div>
				<div className='card'>
					<a href='#'>
						<img src='https://picsum.photos/id/237/200' alt='arroz' className='cardImage' />
						<div className='cardText'>
							<h3>Amarante</h3>
							<p>(icon) 13/10/2020</p>
						</div>
					</a>
				</div>
			</div>
			<div className='mapArea'>
				<img src='https://www.oficinadanet.com.br/media/post/27852/750/adicionar-parada.jpg' alt='imagem de mapa' />
			</div>
		</>
	);
}

export default App;
