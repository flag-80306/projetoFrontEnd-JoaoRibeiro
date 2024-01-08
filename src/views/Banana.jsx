import { useEffect, useState } from 'react';
import tourAPIService from '../services/tourAPIService.js';
import Slide from '../components/Slide.jsx';

function Banana({ params }) {
	const [tourDetails, setTourDetails] = useState({});

	useEffect(function () {
		(async function () {
			const responseAPI = await tourAPIService.getToursData();
			const findInfo = responseAPI.find(obj => {
				return obj.nameID == params.tour;
			});
			setTourDetails(findInfo);
			console.log(findInfo);
		});
	}, []);

	console.log(tourDetails);

	return (
		<>
			<div className='cardInfoTitle marginFifty'>
				{/* <h2>Inside Marão</h2> */}
				<h2>{params.name}</h2>
				<p>
					<img src='/img/schedule.svg' alt='Schedule icon' className='icon' />
					Available all year
				</p>
				<p>(icon){tourDetails.date}</p>
			</div>
			<div className='CardSlide'>
				{tourDetails.slideInfo?.map(item => (
					<Slide key={item.id} services={item} />
				))}
			</div>
			<div className='cardMap'>
				<img src='https://www.oficinadanet.com.br/media/post/27852/750/adicionar-parada.jpg' alt='mapa' />

				<p>mapa (precisamos de latitude e longitude para marcar cada um dos 5 pontos de atração)</p>
			</div>
			<div className='infoCard'>
				<div className='cardDescription'>
					<p>{tourDetails.description}</p>;
				</div>
			</div>
		</>
	);
}

export default Banana;
