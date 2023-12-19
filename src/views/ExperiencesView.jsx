import TitleContainer from '../components/TitleContainer.jsx';
import Card from '../components/Card.jsx';
function ExperiencesView() {
	return (
		<>
			{/* <TitleContainer /> */}
			<div className='secondTitle'>
				<h2>Enjoy a Perfect Tour</h2>
				<p>This list contains all the tours that we have. See here the best selling and best rated experiences. Take a look!</p>
			</div>
			<div className='cardContainer'>
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
			</div>
		</>
	);
}

export default ExperiencesView;
