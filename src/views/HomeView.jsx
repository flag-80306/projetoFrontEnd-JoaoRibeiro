import Card from '../components/Card.jsx';
import TitleContainer from '../components/TitleContainer.jsx';

function HomeView() {
	return (
		<>
			<TitleContainer />
			<div className='secondTitle'>
				<h2>Top-notch Journey Experiences</h2>
				<p>This list contains our best selling and best rated experiences. Take a look!</p>
			</div>
			<div className='cardContainer'>
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
				{/* incluir aqui apenas as 5 tours com melhor ranking  */}
			</div>
			<div className='mapArea'>
				<img src='https://www.oficinadanet.com.br/media/post/27852/750/adicionar-parada.jpg' alt='imagem de mapa' />
			</div>
		</>
	);
}

export default HomeView;
