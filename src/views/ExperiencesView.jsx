import TitleContainer from '../components/TitleContainer.jsx';
import Card from '../components/Card.jsx';
function ExperiencesView() {
	return (
		<>
			<TitleContainer />
			<div className='experiencesTitle'>
				<h2>Premium Expedition Experiences</h2>
				<p>
					Explore our handpicked selection of top-rated and best-selling tours! Delve into a world of thrilling adventures and captivating experiences. Discover our most sought-after and highly
					acclaimed offerings. Come, join us, and embark on unforgettable journeys that promise excitement and wonder!
				</p>
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
