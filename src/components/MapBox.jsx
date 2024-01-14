import { useState } from 'react';
import ReactMapGl, { NavigationControl } from 'react-map-gl';

import * as React from 'react';
import Map from 'react-map-gl';
import tourAPIService from '../services/tourAPIService.js';
import 'mapbox-gl/dist/mapbox-gl.css';
// import ReactMapGl from 'mapbox-gl';

function MapBox() {
	const myToken = 'pk.eyJ1Ijoiam9hb3BmcmliZWlybyIsImEiOiJjbHI5eTdsdWowNmY1Mmp2eGU4YWNnbW14In0.JIDUWfe4UlB-bomQJGKZzQ';

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
					<NavigationControl position='bottom-right' showCompass showZoom />
				</Map>
			</div>
		</>
	);
}
export default MapBox;
