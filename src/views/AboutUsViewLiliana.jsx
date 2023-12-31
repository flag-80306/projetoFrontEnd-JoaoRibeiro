import { Link } from 'wouter'; // npm i wouter
function AboutUsView() {
	return (
		<>
			<div className='aboutUsContainer'>
				<div className='companyContainer'>
					<h2>Amarante Experiences</h2>
					<img src='/img/myLogo.png' alt='Amarante Experiences Logo' />

					<p>
						We embody our Logo!
						<br />
						We encapsulate the invigorating essence of the Marão Mountain landscapes and the rich history of the Aboboreira Mountain.
						<br />
						Our identity resonates with the very essence of Vinho Verde.
						<br />
						We proudly uphold the cherished traditions of our gastronomy and conventual pastry-making.
						<br />
						Our narrative intertwines with the storied past of the St. Gonçalo Bridge.
						<br />
						The leaf within our emblem symbolizes our deep-rooted passion for nature, the crispness of fresh air, and the liberating sensation of freedom.
						<br />
						It represents an experience etched in memory for a lifetime.
					</p>
				</div>
				<div className='aboutUsTitle'>
					<h2>
						Hey there, <br />
						I'm Liliana!
					</h2>
					<img src='/img/Liliana.png' alt='Liliana' />

					<p>
						Hailing from the enchanting city of Amarante in Portugal, I've worn many hats: from teaching English and French to exploring the world on a cruise ship. Passionate about unraveling the
						mysteries of ancient cities, I blend my love for history with a deep connection to Amarante, my hometown. Together with João Ribeiro, we're embarking on an exciting new project. Join us in
						discovering Amarante—a romantic city nestled in breathtaking nature.
					</p>
					<div className='button marginBottom buttonSize'>
						<Link href='/AboutUs'>
							<p>Get to know João</p>
						</Link>
					</div>
				</div>
			</div>
		</>
	);
}

export default AboutUsViewLiliana;
