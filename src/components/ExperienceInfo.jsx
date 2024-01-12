import { useEffect, useState } from 'react';
import CardInfo from '../components/CardInfo.jsx';
import tourAPIService from '../services/tourAPIService';

function ExperienceContainer() {
	const [experienceInfo, setExperienceInfo] = useState([]);

	useEffect(function () {
		(async function () {
			const result = await tourAPIService.getToursData();
			const bestTours = result.info;
			setExperienceInfo(bestTours);
		})();
	}, []);

	return (
		<>
			<div className='cardContainer'>
				{experienceInfo.map(item => (
					<CardInfo key={item.id} tour={item} />
				))}
			</div>
		</>
	);
}

export default ExperienceContainer;
