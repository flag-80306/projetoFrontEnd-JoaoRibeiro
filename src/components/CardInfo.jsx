import Slide from './Slide.jsx';
// import { city } from '/public/mockAPI/slideData.json';
import tourAPIService from '../services/tourAPIService';
function CardInfo({ tour }) {
	const [tourInfo, setTourInfo] = useState([]);

	useEffect(function () {
		(async function () {
			const result = await tourAPIService.getToursData();

			setTourInfo(result.tour);
			console.log(result);
		});
	}, []);
	return (
		<>
			<div className='cardInfoTitle marginFifty'>
				{/* <h2>Inside Marão</h2> */}
				<h2>{tourInfo.name}</h2>
				<p>
					<img src='/img/schedule.svg' alt='Schedule icon' className='icon' />
					Available all year
				</p>
				{/* <p>(icon){tourInfo.date}</p> */}
			</div>
			{/* <div className='CardSlide'>
				{<Slide services={city} />}
				{tourInfo.slideInfo?.map(item => (
					<Slide key={item.id} services={item} />
				))}
			</div>
			<div className='cardMap'>
				<img src='https://www.oficinadanet.com.br/media/post/27852/750/adicionar-parada.jpg' alt='mapa' />

				<p>mapa (precisamos de latitude e longitude para marcar cada um dos 5 pontos de atração)</p>
			</div>
			<div className='infoCard'>
				<div className='cardDescription'>
					<p>
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas, facere pariatur nemo perferendis animi doloremque repellendus itaque aperiam non molestiae ex iste, eos a qui possimus
						aspernatur ad? Quae, a. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio ad vero ab reiciendis cumque laborum aperiam quaerat temporibus quos exercitationem libero inventore,
						animi saepe eos consequatur facere esse amet quasi!longitude
					</p>
					<p>{tourInfo.description}</p>;
				</div>
			</div> */}
		</>
	);
}

export default CardInfo;
