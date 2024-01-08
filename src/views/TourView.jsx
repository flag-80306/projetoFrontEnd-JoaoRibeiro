import { Link } from 'wouter';
// import AmtWeather from './AmtWeather.jsx';
// import TourContainer from '../components/TourContainer.jsx';
import { useEffect, useState } from 'react';
import CardInfo from '../components/CardInfo.jsx';
import tourAPIService from '../services/tourAPIService';

function TourView({ tourInfo }) {
	return (
		<>
			<div>
				<h1>{tourInfo}</h1>
				{/* <CardInfo name={tourInfo} /> */}
				{/* <TourContainer /> */}
				{/* <div className='cardInfoTitle marginFifty'>
					{tourInfo.map(kiwi => (
						<CardInfo key={kiwi.id} tourInfo={kiwi} />
					))}
				</div> */}

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
