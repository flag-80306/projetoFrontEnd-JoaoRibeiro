import NavBar from './NavBar.jsx';
import FooterBar from './FooterBar.jsx';
import TitleContainer from './components/TitleContainer.jsx';
function App() {
	return (
		<>
			<NavBar />
			<TitleContainer />
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
							<p>(icon) 13/10/2020</p>
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
			<FooterBar />
		</>
	);
}

export default App;
