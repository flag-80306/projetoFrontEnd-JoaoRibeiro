import GetWeatherDate from './GetWeatherDate';

function AmtForecast({ tourDetails, weatherInfo }) {
	return (
		<>
			<div className='forecastContainer'>
				<h2>Amarante Forecast</h2>
				<div className='forecast'>
					<div className='todaysforecast'>
						<div className='weatherDate'>
							<GetWeatherDate />
						</div>

						<div className='weatherDetails'>
							<div className='forecastIcon'>
								<img src={'https://openweathermap.org/img/wn/' + weatherInfo.weather?.[0].icon + '.png'} alt={'weather-icon-' + weatherInfo.weather?.[0].main} />
							</div>
							<div className='mainTemp'>
								{Math.round(weatherInfo.main?.temp)}&deg;, {weatherInfo.weather?.[0].main}
							</div>
						</div>
					</div>

					<div className='todaysforecast'>
						<div className='weatherDate'>
							<GetWeatherDate />
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

					<div className='todaysforecast'>
						<div className='weatherDate'>
							<GetWeatherDate />
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

					<div className='todaysforecast'>
						<div className='weatherDate'>
							<GetWeatherDate />
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

					<div className='todaysforecast'>
						<div className='weatherDate'>
							<GetWeatherDate />
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
				</div>
			</div>
		</>
	);
}

export default AmtForecast;
