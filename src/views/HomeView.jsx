import ExperienceContainer from '../components/ExperienceContainer.jsx';
import TitleContainer from '../components/TitleContainer.jsx';
// import Test from '../components/Test.jsx';

function HomeView() {
	return (
		<>
			<TitleContainer />
			{/* <Test /> */}
			<div className='secondTitle'>
				<h2>Top-notch Journey Experiences</h2>
				<p>This list contains our best selling and best rated experiences.</p>
			</div>
			<div className='cardContainer'>
				<ExperienceContainer />
			</div>
			<div className='cardMap'>
				<img src='https://www.oficinadanet.com.br/media/post/27852/750/adicionar-parada.jpg' alt='mapa' />
			</div>
		</>
	);
}

export default HomeView;
