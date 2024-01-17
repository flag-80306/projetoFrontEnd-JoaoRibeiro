import { useEffect, useState } from 'react';
import tourAPIService from '../services/tourAPIService.js';
import Slide from '../components/Slide.jsx';
import AmtWeather from '../components/AmtWeather.jsx';
import AmtForecast from '../components/AmtForecast.jsx';
import MapBoxTour from '../components/MapBoxTour.jsx';

import { Link } from 'wouter';

function TourView({ params }) {
	// console.log(params);
	// console.log(params.tour);
	const [tourDetails, setTourDetails] = useState({});
	const [weatherInfo, setWeatherInfo] = useState({});
	const [forecastInfo, setForecastInfo] = useState([]);
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

					const weatherAPI = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&exclude=current&units=metric&appid=20a33353c598f90c78dc5d9127b60779`;

					const responseWeatherAPI = await fetch(weatherAPI);
					const resultWeatherAPI = await responseWeatherAPI.json();

					setWeatherInfo(resultWeatherAPI);
					console.log('weather');
					console.log(resultWeatherAPI);

					const forecastAPI = `https://api.openweathermap.org/data/2.5/forecast?&lat=${lat}&lon=${lon}&exclude=current&units=metric&appid=20a33353c598f90c78dc5d9127b60779`;

					const responseForecastAPI = await fetch(forecastAPI);
					const resultForecastAPI = await responseForecastAPI.json();
					console.log('forecast');
					console.log(resultForecastAPI);
					//criada no horário das 12h mas atualiza a cada 3 horas
					const forecastResult = [resultForecastAPI.list[6], resultForecastAPI.list[14], resultForecastAPI.list[22], resultForecastAPI.list[31], resultForecastAPI.list[39]];

					setForecastInfo(forecastResult);
					console.log('resultForecast');
					console.log(forecastResult);
					break;
				}
			}
		})();
	}, [params.tour]);

	function tourLocation() {
		if ((tourDetails.lat && tourDetails.lon) != undefined) {
			return <MapBoxTour tourDetails={tourDetails} />;
		}
	}

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
			<div className='cardSlide'>
				<Slide services={tourDetails.slideInfo} />
			</div>
			<div className='cardMap'>{tourLocation()}</div>

			<div className='infoCard'>
				<div className='cardDescription'>
					<p>{tourDetails.description}</p>;
				</div>

				<div className='cardWeather'>
					<AmtWeather tourDetails={tourDetails} weatherInfo={weatherInfo} />
				</div>
			</div>
			<div className='cardContainerForecast'>
				<AmtForecast tourDetails={tourDetails} weatherInfo={weatherInfo} forecastInfo={forecastInfo} />{' '}
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
