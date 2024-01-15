import * as React from 'react';

import tourAPIService from '../services/tourAPIService.js';
import 'mapbox-gl/dist/mapbox-gl.css';
import { useState, useEffect } from 'react';
import Map, { NavigationControl, Marker } from 'react-map-gl';

function MapBoxHome() {
	const [mapBoxData, setMapBoxData] = useState([]);

	useEffect(function () {
		(async function () {
			const resultMap = await tourAPIService.getToursData();
			const bestToursMapBox = resultMap.info.slice(0, 5);
			setMapBoxData(bestToursMapBox);
		})();
	}, []);
	console.log(mapBoxData);
	// 	console.log(1);

	const myToken = 'pk.eyJ1Ijoiam9hb3BmcmliZWlybyIsImEiOiJjbHI5eTdsdWowNmY1Mmp2eGU4YWNnbW14In0.JIDUWfe4UlB-bomQJGKZzQ';

	function handleClick(info) {
		window.location.href = '/TourView/' + info.nameID;
	}

	return (
		<>
			<div className='mainMapContainer'>
				<Map
					mapboxAccessToken={myToken}
					mapStyle='mapbox://styles/joaopfribeiro/clre297nu00c801pihw2t9o3z'
					initialViewState={{
						latitude: 41.268846,
						longitude: -8.078793,
						zoom: 10,
						interactive: true,
					}}
				>
					{mapBoxData.map(info => (
						<Marker color='#4a6660' key={info.id} latitude={info.lat} longitude={info.lon} style={{ cursor: 'pointer' }} onClick={() => handleClick(info)}></Marker>
					))}

					<NavigationControl position='top-right' showCompass showZoom />
				</Map>
			</div>
		</>
	);
}
export default MapBoxHome;
