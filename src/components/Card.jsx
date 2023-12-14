import { Link } from 'wouter';
function Card() {
	return (
		<>
			<Link href='/CardInfo'>
				<div className='cardContainer'>
					<div className='card'>
						<div className='cardText'>
							<h3>Inside Marão</h3>
							<p>Duration: 3 hours</p>

							<p>(icon) Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi et at iusto aut sit.</p>
						</div>
					</div>
				</div>
			</Link>
			;
		</>
	);
}
export default Card;
