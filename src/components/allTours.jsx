import { useEffect, useState } from 'react';
import Card from './Card.jsx';
import tourAPIService from '../services/tourAPIService.js';

function InsideTours() {
	const [experienceInfo, setExperienceInfo] = useState([]);

	useEffect(function () {
		(async function () {
			const result = await tourAPIService.getToursData();

			setExperienceInfo(result);
		})();
	}, []);

	return (
		<>
			<div className='cardContainer'>
				{experienceInfo.info?.map(item => (
					<Card key={item.id} tour={item} />
				))}
			</div>
		</>
	);
}

export default InsideTours;
