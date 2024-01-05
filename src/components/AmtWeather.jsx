import { useEffect, useState } from 'react';

function AmtWeather() {
	const [weather, setWeather] = useState([]);
	useEffect(function () {
		(async function () {
			const url = 'https://tile.openweathermap.org/map/{temp_new}/{127}/{127}/{127}.png?appid={20a33353c598f90c78dc5d9127b60779}';
			const response = await fetch(url);
			const result = await response.json();

			setWeather(result);
		});
	}, []);

	return (
		<>
			<div className='weatherContainer'>
				<div className='weatherCard'>
					{weather.map(item => {
						return <div key={item.id}>{item}</div>;
					})}
				</div>
			</div>
		</>
	);
}

export default AmtWeather;
