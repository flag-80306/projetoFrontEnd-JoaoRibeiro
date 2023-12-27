import { Link } from 'wouter'; // npm i wouter
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
							<div>
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
						</div>
						<div className='textBoxContactForm'>
							<div>
								<label for='mensagem'>Important information about you: </label>
							</div>
							<div>
								<textarea id='message' name='message' rows='4' cols='50' placeholder='Write here your message' className='contactTextArea'></textarea>
							</div>
						</div>
						<input type='submit' value='Send' className=' allBoxContact button btnSendSize' />
					</form>
				</div>
				<div className='contactInfo'>
					<h5>
						Phone Number:
						<br />
						<a href='tel:+351918409757'>+351 918409757</a>
					</h5>
					<h5>
						Email:
						<br />
						<a href='mailto:amaranteexperiences@outlook.com'>amaranteexperiences@outlook.com</a>
					</h5>
				</div>
			</div>
		</>
	);
}

export default BookNowView;
