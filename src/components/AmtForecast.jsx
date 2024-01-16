import GetWeatherDate from './GetWeatherDate';
import NextFiveDays from './NextFiveDays';

function AmtForecast({ tourDetails, forecastInfo }) {
	const nextFiveDays = NextFiveDays();
	return (
		<>
			<div className='forecastContainer'>
				<h2>
					Forecast for {tourDetails.city}, {tourDetails.country}
				</h2>
				<div className='forecast'>
					{forecastInfo?.map((item, index) => (
						<div key={item.dt} className='todaysforecast'>
							<div className='forecastDate'>
								<GetWeatherDate dateInfo={nextFiveDays[index]} />
							</div>
							<div className='weatherDetails'>
								<div className='forecastIcon'>
									<img src={'https://openweathermap.org/img/wn/' + item.weather?.[0].icon + '.png'} alt={'weather-icon-' + item.weather?.[0].main} />
								</div>
								<div className='mainTemp'>
									{Math.round(item.main?.temp)}&deg;, {item.weather?.[0].main}
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</>
	);
}

export default AmtForecast;
