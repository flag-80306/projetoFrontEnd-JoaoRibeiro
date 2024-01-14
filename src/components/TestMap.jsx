import * as React from 'react';
import Map from 'react-map-gl';
import tourAPIService from '../services/tourAPIService.js';
import 'mapbox-gl/dist/mapbox-gl.css';

function TestMap() {
	const [mapBoxData, setMapBoxData] = useState([]);

	useEffect(function () {
		(async function () {
			const result = await tourAPIService.getToursData();

			setMapBoxData(result.info);
		})();
	}, []);
	console.log(mapBoxData);
	console.log(1);

	const myToken = 'pk.eyJ1Ijoiam9hb3BmcmliZWlybyIsImEiOiJjbHI5eTdsdWowNmY1Mmp2eGU4YWNnbW14In0.JIDUWfe4UlB-bomQJGKZzQ';

	// function handleClick(info) {
	// 	window.location.href = '/trips/' + info.destination?.city;
	// }

	return (
		<>
			<div className='mainMapContainer'>
				<Map
					mapboxAccessToken={myToken}
					mapStyle='mapbox://styles/joaopfribeiro/clr9yetpy005j01pd6oh0aywa'
					initialViewState={{
						latitude: 41.268846,
						longitude: -8.078793,
						zoom: 10,
						interactive: true,
					}}
				>
					{/* {mapBoxData.map(info => (
						<Marker color='#3A4D39' key={info.id} latitude={info.lat} longitude={info.lon} onClick={() => handleClick(info)}></Marker>
					))} */}

					<NavigationControl position='bottom-right' showCompass showZoom />
				</Map>
			</div>
		</>
	);
}
export default TestMap;
