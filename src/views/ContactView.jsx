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
							<div className='contactForm'>
								<label for='name'>Name: </label>
								<input type='text' id='name' name='name' placeholder='First and Last Name' className='boxSize allBoxContact' required />
							</div>
							<div className='contactForm'>
								<label for='email'>Email: </label>
								<input type='email' id='email' name='email' placeholder='Email' className='allBoxContact' required />
							</div>
							<div className='contactForm'>
								<label for='phoneNumber'>Phone: </label>
								<input type='phoneNumber' id='phoneNumber' name='phoneNumber' placeholder='Phone Number' className=' allBoxContact' required />
							</div>
						</div>

						<div className='contactForm'>
							<label for='message' className='writeMessage'>
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
							<a href='tel:+351918409757' className='numberContact'>
								+351 918409757
							</a>
							<br />
							<a href='tel:+351919155900' className='numberContact'>
								+351 919155900
							</a>
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
