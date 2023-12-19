import { Link } from 'wouter'; // npm i wouter

function FooterBar() {
	return (
		<>
			<footer>
				<div className='footerContainer'>
					<div className='footerCard'>
						<h3>Need help?</h3>
					</div>
					<div className='footerCard'>
						<Link href='/Contact'>
							<h3>Contact Us</h3>
						</Link>
					</div>

					<div className='footerCard'>
						<a href='https://www.instagram.com/insideexperiences/' target='_blank'>
							<h3>Social Media</h3>
						</a>
					</div>
				</div>
			</footer>
		</>
	);
}

export default FooterBar;
