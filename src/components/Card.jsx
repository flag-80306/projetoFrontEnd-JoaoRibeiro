import { Link } from 'wouter';
import { useEffect, useState } from 'react';
import fetchTourService from '../services/fetchTourService';
function Card() {
	const [tour, setTour] = useState({});

	async function getCardInfo() {
		const result = await fetchTourService.fetchTourInfo();
		// console.log(result);
		setTour(result);
	}

	useEffect(function () {
		getCardInfo();
	}, []);

	return (
		<>
			<Link href='/CardInfo'>
				<div className='card'>
					<img src='/img/cardPhoto/marao.png' alt='marão jeep tour' />
					{/* <img src={tour.cardImageSRC} alt={tour.cardImageALT} /> */}

					<div className='cardText'>
						<h3>Inside Abobo</h3>
						<p>Duration: 3 hours</p>
						<p>(icon) Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi et at iusto aut sit.</p>
						<p>70€ per person</p>
						{/* <h3>{tour.name}</h3>
						<p>{tour.duration}</p>
						<p>{tour.shortDescription}</p>
						<p>{tour.price}</p> */}
					</div>
				</div>
			</Link>
		</>
	);
}
export default Card;
