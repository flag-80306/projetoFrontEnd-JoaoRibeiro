import { useEffect, useState } from 'react';
import tourAPIService from '../services/tourAPIService.js';
import Slide from '../components/Slide.jsx';
import AmtWeather from '../components/AmtWeather.jsx';
import MapBox from '../components/MapBox.jsx';
import { Link } from 'wouter';

function TourView({ params }) {
	// console.log(params);
	// console.log(params.tour);
	const [tourDetails, setTourDetails] = useState({});
	const [weatherInfo, setWeatherInfo] = useState({});
	useEffect(() => {
		(async function fetchTourDetails() {
			const responseAPI = await tourAPIService.getToursData();

			const findInfo = responseAPI.info;

			for (let i = 0; i < findInfo.length; i++) {
				// console.log('Params tour:', params.tour);
				// console.log('Checking:', findInfo[i].nameID);
				if (findInfo[i].nameID === params.tour) {
					setTourDetails(findInfo[i]);

					const { lat, lon } = findInfo[i];
					// isto é o mesmo que usar o --> const lat = findInfo[i].lat; e o --> const lon = findInfo[i].lon;

					const urlWeatherAPI = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&exclude=current&units=metric&appid=20a33353c598f90c78dc5d9127b60779`;

					const responseWeatherAPI = await fetch(urlWeatherAPI);
					const resultWeatherAPI = await responseWeatherAPI.json();

					setWeatherInfo(resultWeatherAPI);
					console.log(resultWeatherAPI);

					break;
				}
			}
		})();
	}, [params.tour]);

	return (
		<>
			<div className='cardInfoTitle marginFifty'>
				<h2>{tourDetails.name}</h2>
				<p>
					<img src='/img/schedule.svg' alt='Schedule icon' className='icon' />
					{tourDetails.date}
					<br />
					{tourDetails.city}, {tourDetails.country}
				</p>
			</div>
			<div className='CardSlide'>
				<Slide services={tourDetails.slideInfo} />
			</div>
			<div className='cardMap'>
				{/* <img src='https://www.oficinadanet.com.br/media/post/27852/750/adicionar-parada.jpg' alt='mapa' />

				<p>mapa (precisamos de latitude e longitude para marcar cada um dos 5 pontos de atração)</p> */}
			</div>

			<div className='infoCard'>
				<div className='cardDescription'>
					<p>{tourDetails.description}</p>;
				</div>

				<div className='cardWeather'>
					<AmtWeather tourDetails={tourDetails} weatherInfo={weatherInfo} />
				</div>
			</div>
			<div className='cardContainerForecast'>{/* <AmtForecast forecastInfo={forecastInfo} /> try later */}</div>
			<div className='button marginBottom'>
				<Link href='/BookNow'>
					<p>Book Now!</p>
				</Link>
			</div>
		</>
	);
}

export default TourView;
