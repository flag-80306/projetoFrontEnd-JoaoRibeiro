import { useEffect, useState } from 'react';
import CardInfo from '../components/CardInfo.jsx';
import tourAPIService from '../services/tourAPIService';

function TourContainer() {
	const [tourInfo, setTourInfo] = useState([]);

	useEffect(function () {
		(async function () {
			const result = await tourAPIService.getToursData();

			setTourInfo(result.info);
			console.log(result);
		});
	}, []);
	return (
		<>
			<div className='cardInfoTitle marginFifty'>
				{tourInfo.map(kiwi => (
					<CardInfo key={kiwi.id} tourInfo={kiwi} />
				))}
			</div>
		</>
	);
}
export default TourContainer;
