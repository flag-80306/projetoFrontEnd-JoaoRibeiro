import { useEffect, useState } from 'react';
import Card from '../components/Card.jsx';
import tourAPIService from '../services/tourAPIService';

function ExperienceContainer() {
	const [experienceInfo, setExperienceInfo] = useState([]);

	useEffect(function () {
		(async function () {
			const result = await tourAPIService.getToursData();
			const bestTours = result.info.slice(0, 5);

			setExperienceInfo(bestTours);
		})();
	}, []);

	return (
		<>
			{experienceInfo.map(item => (
				<Card key={item.id} tour={item} />
			))}
		</>
	);
}

export default ExperienceContainer;
