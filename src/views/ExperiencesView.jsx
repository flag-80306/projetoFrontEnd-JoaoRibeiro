import TitleContainer from '../components/TitleContainer.jsx';
import Card from '../components/Card.jsx';
import ExperienceContainer from '../components/ExperienceContainer.jsx';
function ExperiencesView() {
	return (
		<>
			<TitleContainer />
			<div className='experiencesTitle'>
				<h2>Premium Expedition Experiences</h2>
				<p>Discover and embark on unforgettable journeys that promise excitement and wonder!</p>
			</div>
			<div className='cardContainer'>
				<ExperienceContainer />
			</div>
		</>
	);
}

export default ExperiencesView;
