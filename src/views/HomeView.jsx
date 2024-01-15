import ExperienceContainer from '../components/ExperienceContainer.jsx';
import TitleContainer from '../components/TitleContainer.jsx';
import MapBoxHome from '../components/MapBoxHome.jsx';

function HomeView() {
	return (
		<>
			<TitleContainer />

			<div className='secondTitle'>
				<h2>Top-notch Journey Experiences</h2>
				<p>This list contains our best selling and best rated experiences.</p>
			</div>
			<div className='cardContainer'>
				<ExperienceContainer />
			</div>
			<div className='cardMap'>
				<MapBoxHome />
			</div>
		</>
	);
}

export default HomeView;
