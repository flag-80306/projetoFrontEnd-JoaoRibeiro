import { Link } from 'wouter'; // npm i wouter
function ContactView() {
	return (
		<>
			<div className='contactFormContainer'>
				<div className='contactContainer'>
					<h2>We are here for you!!! </h2>
					<p>
						The moment to plan your <b>amazing vacations in Amarante</b> has arrive! Send us a message to plan your days or just to receive information about the city, monuments, activities and much
						more. <br />
						<b>#DiscoverWithLocals</b>
					</p>
					<form action='' method='post' className='contactForm'>
						<div className='infoContactForm'>
							<div>
								<label for='name'>Name: </label>
								<input type='text' id='nome' name='name' placeholder='First and Last name' className='allBoxContact' required />
							</div>
							<div>
								<label for='email'>Email: </label>
								<input type='email' id='email' name='email' placeholder='email' className='allBoxContact' required />
							</div>
							<div>
								<label for='phoneNumberphone'>Phone: </label>
								<input type='phoneNumberphone' id='phoneNumberphone' name='phoneNumber' placeholder='Phone Number' className='allBoxContact' required />
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
							<label for='mensagem' className='writeMessage'>
								Your Message:
							</label>

							<textarea id='message' name='message' rows='4' cols='50' placeholder='Write here your message' className='contactTextArea allBoxContact  '></textarea>
						</div>
						<input type='submit' value='Send' className='button btnSendSize' />
					</form>
				</div>
				<div className='contactBox'>
					<div className='contactInfo'>
						<p>
							Phone Number:
							<br />
							<a href='tel:+351918409757'>+351 918409757</a>
							<br />
							<a href='tel:+351919155900'>+351 919155900</a>
						</p>
						<p>
							Email:
							<br />
							<a href='mailto:info@amaranteexperiences.com'>info@amaranteexperiences.com</a>
						</p>
					</div>
					<div className='button marginBottom buttonSize'>
						<Link href='/BookNow'>
							<p>Ready for a Booking</p>
						</Link>
					</div>
				</div>
			</div>
		</>
	);
}

export default ContactView;
