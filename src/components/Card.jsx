import { Link } from 'wouter';
function Card() {
	return (
		<>
			<Link href='/CardInfo'>
				<div className='cardContainer'>
					<div className='card'>
						<img src='../img/natureza_tour_adventure_jeep_800x533.png' />
						<div className='cardText'>
							<h3>Amarante</h3>

							<p>(icon) 13/10/2020</p>
						</div>
					</div>
				</div>
			</Link>
			;
		</>
	);
}
export default Card;
