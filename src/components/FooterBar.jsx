import { Link } from 'wouter'; // npm i wouter

function FooterBar() {
	return (
		<>
			<footer>
				<div className='footerContainer'>
					<div className='footerCard'>
						<a href='https://www.instagram.com/insideexperiences/' target='_blank'>
							<h3>Social Media</h3>
						</a>
					</div>
					<div className='footerCard'>
						<Link href='/Contact'>
							<h3>Contact Us</h3>
						</Link>
					</div>

					<div className='footerCard'>
						<a href='https://www.linkedin.com/in/jo%C3%A3o-pedro-ribeiro-b7649b49/' target='_blank'>
							<h3>©João Ribeiro</h3>
						</a>
					</div>
				</div>
			</footer>
		</>
	);
}

export default FooterBar;
