import { useEffect, useState } from 'react';
import CardInfo from '../components/CardInfo.jsx';
import tourAPIService from '../services/tourAPIService';

function TourContainer() {
	const [tourInfo, setTourInfo] = useState([]);

	useEffect(function () {
		(async function () {
			const result = await tourAPIService.getToursData();

			console.log(result);
			setTourInfo(result);
		});
	}, []);
	return (
		<>
			<div className='cardInfoTitle marginFifty'>
				{tourInfo.info?.map(info => (
					<CardInfo key={info.id} tour={info} />
				))}
			</div>
		</>
	);
}
export default TourContainer;
