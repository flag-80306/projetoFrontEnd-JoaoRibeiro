import { useEffect, useState } from 'react';
import ProfileSlide from '../components/ProfileSlide.jsx';
function AboutUsView() {
	const [profileInfo, setProfileInfo] = useState();

	useEffect(function () {
		(async function () {
			const response = await fetch('/mockAPI/mockAPIInfo.json');
			const result = await response.json();
			const findProfile = result.aboutUs;

			setProfileInfo(findProfile);
			console.log('Estou aqui');
			console.log(result);
		})();
	}, []);

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

				<div className='aboutUs'>
					<ProfileSlide profile={profileInfo} />
				</div>
			</div>
		</>
	);
}

export default AboutUsView;
