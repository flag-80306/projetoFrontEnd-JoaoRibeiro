import GetWeatherDay from './GetWeatherDay';

function AmtWeather({ tourDetails, weatherInfo }) {
	return (
		<>
			<div className='weatherContainer'>
				<h2>
					{tourDetails.city},<br /> {tourDetails.country}
				</h2>
				<div className='todaysWeather'>
					<div className='weatherDate'>
						<GetWeatherDay />
					</div>
				</div>
				<div className='weatherDetails'>
					<div className='weatherIcon'>
						<img src={'https://openweathermap.org/img/wn/' + weatherInfo.weather?.[0].icon + '.png'} alt={'weather-icon-' + weatherInfo.weather?.[0].main} />
					</div>
					<div className='mainTemp'>
						{Math.round(weatherInfo.main?.temp)}&deg;, {weatherInfo.weather?.[0].main}
					</div>
				</div>
			</div>
		</>
	);
}

export default AmtWeather;
