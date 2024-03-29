import TitleContainer from '../components/TitleContainer.jsx';
import InsideTours from '../components/InsideTours.jsx';
import MapBoxExperiences from '../components/MapBoxExperiences.jsx';

function ExperiencesView() {
	return (
		<>
			<TitleContainer />
			<div className='experiencesTitle'>
				<h2>Premium Expedition Experiences</h2>
				<p>Discover and embark on unforgettable journeys that promise excitement and wonder!</p>
			</div>
			<div className='cardContainer'>
				<InsideTours />
			</div>
			<MapBoxExperiences />
		</>
	);
}

export default ExperiencesView;
