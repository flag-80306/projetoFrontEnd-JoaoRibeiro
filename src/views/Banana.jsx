// import { useEffect, useState } from 'react';
// import tourAPIService from '../services/tourAPIService.js';
// import Slide from '../components/Slide.jsx';

// function Banana({ params }) {
// 	const [tourDetails, setTourDetails] = useState({});

// 	useEffect(() => {
// 		(async function fetchTourDetails() {
// 			const responseAPI = await tourAPIService.getToursData();

// 			const findInfo = responseAPI.info;

// 			for (let i = 0; i < findInfo.length; i++) {
// 				if (findInfo[i].nameID === params.tour) {
// 					setTourDetails(findInfo[i]);
// 					break;
// 				}
// 			}
// 		})();
// 	}, [params.tour]);

// 	return (
// 		<>
// 			<div className='cardInfoTitle marginFifty'>
// 				<h2>{tourDetails.name}</h2>
// 				<p>
// 					<img src='/img/schedule.svg' alt='Schedule icon' className='icon' />
// 					{tourDetails.date}
// 				</p>
// 			</div>
// 			<div className='CardSlide'>
// 				<Slide services={tourDetails.slideInfo} />
// 			</div>
// 			<div className='cardMap'>
// 				<img src='https://www.oficinadanet.com.br/media/post/27852/750/adicionar-parada.jpg' alt='mapa' />

// 				<p>mapa (precisamos de latitude e longitude para marcar cada um dos 5 pontos de atração)</p>
// 			</div>
// 			<div className='infoCard'>
// 				<div className='cardDescription'>
// 					<p>{tourDetails.description}</p>;
// 				</div>
// 			</div>
// 		</>
// 	);
// }

// export default Banana;
