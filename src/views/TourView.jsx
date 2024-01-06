import CardInfo from '../components/CardInfo.jsx';
import { Link } from 'wouter';
// import AmtWeather from './AmtWeather.jsx';
import TourContainer from '../components/TourContainer.jsx';

function TourView() {
	return (
		<>
			<div>
				<CardInfo />
				{/* <TourContainer /> */}

				<div className='cardWeather'>
					<img src='/img/weather.png' alt='tempo' />
					{/* <AmtWeather /> */}
				</div>
			</div>
			<div className='button marginBottom'>
				<Link href='/BookNow'>
					<p>Book Now!</p>
				</Link>
			</div>
		</>
	);
}

export default TourView;
