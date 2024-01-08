import { Link } from 'wouter';

function Card({ tour }) {
	console.log(tour);
	return (
		<>
			{/* <Link href='/TourView/'> */}
			<Link href={'/TourView/' + tour.nameID}>
				<div className='card'>
					<img src={tour.cardImage.src} alt={tour.cardImage.alt} />

					<div className='cardText'>
						<h3>{tour.name}</h3>
						<p>{tour.duration}</p>
						<p>{tour.shortDescription}</p>
						<p>{tour.price}</p>
					</div>
				</div>
			</Link>
		</>
	);
}
export default Card;
