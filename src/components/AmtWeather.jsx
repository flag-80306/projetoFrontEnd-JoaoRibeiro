import GetWeatherDate from './GetWeatherDate';

function AmtWeather({ tourDetails, weatherInfo }) {
	return (
		<>
			<div className='weatherContainer'>
				<h2>Today's Weather</h2>
				<div className='todaysWeather'>
					<div className='weatherDate'>
						<GetWeatherDate />
					</div>
					<div className='weatherIcon'>
						<img src={'https://openweathermap.org/img/wn/' + weatherInfo.weather?.[0].icon + '.png'} alt={'weather-icon-' + weatherInfo.weather?.[0].main} />
					</div>
				</div>

				<div className='mainTemp'>
					{Math.round(weatherInfo.main?.temp)}&deg;, {weatherInfo.weather?.[0].main}
				</div>

				<div className='weatherLocation'>
					<p>
						{tourDetails.city}, {tourDetails.country}
					</p>
				</div>
			</div>
		</>
	);
}

export default AmtWeather;
