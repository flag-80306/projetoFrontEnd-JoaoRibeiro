import NavBar from '../NavBar.jsx';
import FooterBar from '../FooterBar.jsx';
import TitleContainer from '../components/TitleContainer.jsx';
function ContactView() {
	return (
		<>
			<NavBar />
			<TitleContainer />
			<div className='contactContainer'>
				<h2>We are here for you!!! </h2>
				<p className='contactTextPage'>
					The moment to plan your <b>amazing avacations in Amarante</b> has arrive! <br /> Send us a message to plan your days or just to receive information <br /> about the city, monuments,
					activities and much more. <br />
					<b>#DiscoverWithLocals</b>
				</p>
				<div>
					<form action='' method='post' className='contactForm'>
						<div className='nameContactForm'>
							<label for='name'>Name: </label>
							<input type='text' id='nome' name='name' placeholder='First and Last name' className='allBoxContact' />
						</div>
						<div className='emailPhoneContactForm'>
							<div>
								<label for='email'>Email: </label>
								<input type='email' id='email' name='email' placeholder='email' className='allBoxContact' />
							</div>
							<div>
								<label for='phoneNumberphone'>Phone: </label>
								<input type='phoneNumberphone' id='phoneNumberphone' name='phoneNumber' placeholder='Phone Number' className='allBoxContact' />
							</div>
						</div>
						<div className='DateContactForm'>
							<div>
								<label for='startDate'>From: </label>
								<input type='date' id='startDate' name='startDate' className='allBoxContact' />
							</div>
							<div>
								<label for='endDate'>To: </label>
								<input type='date' id='endDate' name='endDate' className='allBoxContact' />
							</div>
						</div>
						<div className='textBoxContactForm'>
							<div>
								<label for='mensagem'>Your Message: </label>
							</div>
							<div>
								<textarea id='message' name='message' rows='4' cols='50' placeholder='Write here your message' className='allBoxContact'></textarea>
							</div>
						</div>
						<input type='submit' value='Send' />
					</form>
					<div className='asideInfo'>
						<h5>
							Phone number:
							<br />
							+351 918 409 757
						</h5>
						<h5>
							Email:
							<br />
							amaranteexperiences@outlook.com
						</h5>
					</div>
				</div>
			</div>
			<FooterBar />
		</>
	);
}

export default ContactView;
