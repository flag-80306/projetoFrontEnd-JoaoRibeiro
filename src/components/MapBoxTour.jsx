import * as React from 'react';

import 'mapbox-gl/dist/mapbox-gl.css';

import Map, { NavigationControl, Marker } from 'react-map-gl';

function MapBoxTour({ tourDetails }) {
	const myToken = 'pk.eyJ1Ijoiam9hb3BmcmliZWlybyIsImEiOiJjbHI5eTdsdWowNmY1Mmp2eGU4YWNnbW14In0.JIDUWfe4UlB-bomQJGKZzQ';
	const lat = tourDetails.lat;
	const lon = tourDetails.lon;

	return (
		<>
			<div className='mainMapContainer'>
				<Map
					mapboxAccessToken={myToken}
					mapStyle='mapbox://styles/joaopfribeiro/clre297nu00c801pihw2t9o3z'
					initialViewState={{
						latitude: lat,
						longitude: lon,
						zoom: 10,
						interactive: false,
					}}
				>
					<Marker color='#4a6660' latitude={tourDetails.lat} longitude={tourDetails.lon}></Marker>

					<NavigationControl position='top-right' showCompass showZoom />
				</Map>
			</div>
		</>
	);
}
export default MapBoxTour;
