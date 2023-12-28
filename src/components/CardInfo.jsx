import Carroussel from './Carroussel.jsx';
import { slides } from '../data/carouselData.json';
import { Link } from 'wouter'; // npm i wouter

function CardInfo() {
	return (
		<>
			<div className='secondTitle marginFifty'>
				<h2>Inside Marão</h2>
				<p>(icon)13-03-2020</p>

				{/* <img src='/img/natureza_tour_adventure_jeep_800x533.png' alt='' /> */}
			</div>
			<div className='CardCarroussel'>
				<Carroussel data={slides} />
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
				</div>

				<div className='cardWeather'>
					<img src='/img/weather.png' alt='tempo' />
				</div>
			</div>
			<div className='button marginBottom'>
				<Link href='/BookNow'>
					<p>Book Now!</p>
				</Link>
			</div>
		</>
	);
}

export default CardInfo;
