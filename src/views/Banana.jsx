import TourContainer from '../components/TourContainer';
import CardInfo from '../components/CardInfo';

function Banana({ tourInfo }) {
	console.log(tourInfo);
	console.log(123);
	return (
		<>
			<div>
				Escolhes-te o{tourInfo.name}
				<CardInfo tour={tourInfo} />
			</div>
		</>
	);
}

export default Banana;
