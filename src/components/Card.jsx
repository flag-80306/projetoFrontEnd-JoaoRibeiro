import { Link } from 'wouter';
function Card() {
	return (
		<>
			<Link href='/CardInfo'>
				<div className='card'>
					<div className='cardText'>
						<h3>Inside Marão</h3>
						<p>Duration: 3 hours</p>

						<p>(icon) Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi et at iusto aut sit.</p>
						<p>70€ per person</p>
					</div>
				</div>
			</Link>
			;
		</>
	);
}
export default Card;
