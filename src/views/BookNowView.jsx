function BookNowView() {
	return (
		<>
			<div className='contactFormContainer'>
				<div className='contactContainer'>
					<h2>Book Here With Us!</h2>
					<p className='contactTextPage'>
						Let us know the experience and dates for your vacations!!!
						<br />
						<b>#DiscoverWithLocals</b>
					</p>
					<form action='' method='post' className='contactForm'>
						<div className='infoContactForm'>
							<div className='contactForm'>
								<label for='startDate'>You will arrive in :</label>
								<input type='date' id='startDate' name='startDate' className='allBoxContact' />
							</div>
							<div className='contactForm'>
								<label for='endDate'>You will be around until : </label>
								<input type='date' id='endDate' name='endDate' className='allBoxContact' />
							</div>
							<div className='infoContactForm'>
								<label for='experiencesList'>Select your Experience: </label>
								<select id='experiencesList' name='experiencesList' className='allBoxContact'>
									<option value='1'>Marão</option>
									<option value='2'>Vinho Verde</option>
									<option value='3'>Aboboreira</option>
									<option value='4'>Aboboreira</option>
									<option value='5'>Aboboreira</option>
									<option value='6'>Aboboreira</option>
									<option value='7'>Aboboreira</option>
									<option value='8'>Aboboreira</option>
									<option value='9'>Aboboreira</option>
									<option value='10'>Aboboreira</option>
								</select>
							</div>
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

							<div className='textBoxContactForm'>
								<label for='message' className='writeMessage'>
									Your Message:
								</label>

								<textarea id='message' name='message' rows='4' cols='50' placeholder='Write here your message' className='contactTextArea allBoxContact  '></textarea>
							</div>
						</div>

						<input type='submit' value='Send' className='btnSendSize allBoxContact button ' />
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
				</div>
			</div>
		</>
	);
}

export default BookNowView;
