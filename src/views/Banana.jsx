import TourContainer from '../components/TourContainer';
import CardInfo from '../components/CardInfo';

function Banana({ params }) {
	console.log(params.tour);
	console.log(123);
	return (
		<>
			<div>
				Escolhes-te o{params.tour}
				{/* <CardInfo tourInfo={tour} /> */}
			</div>
		</>
	);
}

export default Banana;
