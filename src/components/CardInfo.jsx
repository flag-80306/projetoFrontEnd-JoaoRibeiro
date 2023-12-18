import Slider from './Slider.jsx';
import { slides } from '../data/carouselData.json';

function CardInfo() {
	return (
		<>
			<div className='cardTitle'>
				<h1>titulo</h1>
				<h4>13-03-2020</h4>
				<Slider data={slides} />

				{/* <img src='/img/natureza_tour_adventure_jeep_800x533.png' alt='' /> */}
			</div>
			<div>
				<p>
					mapa <img src='https://www.oficinadanet.com.br/media/post/27852/750/adicionar-parada.jpg' alt='mapa' />
				</p>
				<section>
					<div>
						<p>
							Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas, facere pariatur nemo perferendis animi doloremque repellendus itaque aperiam non molestiae ex iste, eos a qui possimus
							aspernatur ad? Quae, a.
						</p>
					</div>
					<div>
						<img src='/img/weather.png' alt='tempo' />
					</div>
				</section>
			</div>
		</>
	);
}

export default CardInfo;
