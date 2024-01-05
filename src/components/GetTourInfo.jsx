// import { useEffect, useState } from 'react';

// function GetTourInfo() {
// 	const [tour, setTour] = useState([]);
// 	useEffect(function () {
// 		(async function () {
// 			const url = './services/mockAPIService.json';
// 			const response = await fetch(url);
// 			const result = await response.json();

// 			console.log(result);
// 			setTour(result);
// 		});
// 	}, []);

// 	return (
// 		<>
// 			<ul>
// 				{tour.map(experience => {
// 					<li key={experience.}>
// 					return	<Link href={'/CardInfo/' + experience.id}>{experience.name}</Link>
// 					</li>
// 				})}
// 			</ul>
// 		</>
// 	);
// }
// export default GetTourInfo;
