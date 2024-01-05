import { useEffect, useState } from 'react';
import Card from '../components/Card.jsx';
import tourAPIService from '../services/tourAPIService';

function ExperienceContainer() {
	const [experienceInfo, setExperienceInfo] = useState([]);

	useEffect(function () {
		(async function () {
			const result = await tourAPIService.getTourCard(5);
			//apenas 5 cards no ecra

			setExperienceInfo(result);
		})();
	}, []);

	return (
		<>
			<div className='cardContainer'>
				{experienceInfo.info?.map(item => (
					<Card key={item.id} tourURL={item} />
				))}
			</div>
		</>
	);
}

export default ExperienceContainer;
