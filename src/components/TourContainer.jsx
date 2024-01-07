import { useEffect, useState } from 'react';
import CardInfo from '../components/CardInfo.jsx';
import tourAPIService from '../services/tourAPIService';

function TourContainer() {
	const [tourInfo, setTourInfo] = useState([]);

	useEffect(function () {
		(async function () {
			const result = await tourAPIService.getToursData();
			const allTours = result.info;
			setTourInfo(allTours);
			console.log(allTours);
		});
	}, []);
	return (
		<>
			<div className='cardInfoTitle marginFifty'>
				{tourInfo.info?.map(item => (
					<CardInfo key={item.id} description={item} />
				))}
			</div>
		</>
	);
}
export default TourContainer;
