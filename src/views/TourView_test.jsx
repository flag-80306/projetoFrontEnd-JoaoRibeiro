import CardInfo from '../components/CardInfo.jsx';
import { Link } from 'wouter';
// import AmtWeather from './AmtWeather.jsx';
import TourContainer from '../components/TourContainer.jsx';
import tourAPIService from '../services/tourAPIService';

function TourView({ params }) {
	const [tourDetails, setTourDetails] = useState({});
	const [WeatherInfo, setWeatherInfo] = useState({});
	const [forecastInfo, setForecastInfo] = useState([]);

	useEffect(function () {
		(async function () {
			const responseTourAPI = await tourAPIService.tourAPIInfo();
			const element = responseTourAPI.find(obj => {
				return obj.city == params;
			});
			//trocar nome de foundElement

			setTourDetails(element);

			const urlWeatherAPI = `https://api.openweathermap.org/data/2.5/weather?lat=${element.lat}&lon=${element.lon}&exclude=current&units=metric&appid=20a33353c598f90c78dc5d9127b60779`;

			const responseWeatherAPI = await fetch(urlWeatherAPI);
			const resultWeatherAPI = await responseWeatherAPI.json();

			setWeatherInfo(resultWeatherAPI);

			const urlForecastAPI = `https://api.openweathermap.org/data/2.5/forecast?&lat=${element.lat}&lon=${element.lon}&exclude=current&units=metric&appid=20a33353c598f90c78dc5d9127b60779`;

			const responseForecastAPI = await fetch(urlForecastAPI);
			const resultForecastAPI = await responseForecastAPI.json();

			const forecastResult = [resultForecastAPI.list[7], resultForecastAPI.list[15], resultForecastAPI.list[23], resultForecastAPI.list[31], resultForecastAPI.list[39]];

			setForecastInfo(forecastResult);
		})();
	}, []);
	return (
		<>
			<div>
				<CardInfo />
				{/* <TourContainer /> */}

				<div className='cardWeather'>
					{/* <img src='/img/weather.png' alt='tempo' /> */}
					{/* <AmtWeather key={WeatherInfo.id} tourDetails={tourDetails} weatherInfo={weatherInfo} forecastInfo={forecastInfo} /> */}
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
