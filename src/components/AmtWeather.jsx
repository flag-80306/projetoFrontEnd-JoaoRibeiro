import GetCurrentDate from './GetCurrentDate';

function AmtWeather({ tourDetails, weatherInfo, forecastInfo }) {
	return (
		<>
			<div className='tripWeather'>
				<div className='weatherTitle'>
					<p>CURRENT WEATHER</p>
				</div>

				<div className='weatherHeader'>
					<div className='weatherIcon'>
						<img src={'https://openweathermap.org/img/wn/' + weatherInfo.weather?.[0].icon + '.png'} alt={'weather-icon-' + weatherInfo.weather?.[0].main} />
					</div>

					<div className='weatherDate'>
						<GetCurrentDate />
					</div>
				</div>

				<div className='currentWeatherInfo'>
					<div className='temperature'>{Math.round(weatherInfo.main?.temp)}&deg;</div>

					<div className='weatherDescription'>
						<div className='weatherCondition'>{weatherInfo.weather?.[0].main}</div>

						<div className='weatherLocation'>
							{tourDetails.destination?.city}, {tourDetails.destination?.country}
						</div>
					</div>
				</div>
			</div>

			<div className='forecastWeather'>
				<div className='forecastTitle'>
					<p>WEATHER FORECAST BY THIS HOUR FOR THE NEXT DAYS</p>
				</div>

				<div className='forecastInfo'>
					{forecastInfo?.map(item => (
						<div key={item.dt} className='forecastCard'>
							<div className='forecastTopCard'>
								<p>{item.dt_txt.substring(0, 10)}</p>
							</div>

							<div className='forecastBottomCard'>
								<div className='forecastLeftCard'>
									<img src={'https://openweathermap.org/img/wn/' + item.weather?.[0].icon + '.png'} alt={'weather-icon-' + item.weather?.[0].main} />
								</div>

								<div className='forecastRightCard'>
									<p>{Math.round(item.main?.temp_min)}&deg;</p>
									<p>{item.weather?.[0].main}</p>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</>
	);
}

export default AmtWeather;
