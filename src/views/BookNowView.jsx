import React from 'react';

function BookNowView() {
	const handleSubmit = event => {
		// ou --> function handleSubmit(event) {

		// o .preventDefault() evita que a página volte a carregar após o envio da informação e assim o erro HTTP ERROR 404 não aparece.
		event.preventDefault();
		// função que vai buscar a info do formulário
		const formData = new FormData(event.target);
		// Cria um objeto vazio para armazenar os valores do formulário
		const formValues = {};
		// A info do formData é copiada, utilizando o método forEach, para um objeto vazio do formValuespara ser organizada e enviada para o console.log
		formData.forEach((value, key) => {
			formValues[key] = value;
		});

		console.log('Dados do formulário:', formValues);
		event.target.reset();
	};
	return (
		<div className='contactContainer'>
			<h2>Book Here With Us!</h2>
			<p className='contactTextPage'>
				Let us know the experience and dates for your vacations!!!
				<br />
				<b>#DiscoverWithLocals</b>
			</p>

			<form onSubmit={handleSubmit} className='contactForm'>
				<div className='infoContactForm'>
					<div className='contactForm'>
						<label htmlFor='startDate'>You will arrive in :</label>
						<input type='date' id='startDate' name='startDate' className='allBoxContact' />
					</div>
					<div className='contactForm'>
						<label htmlFor='endDate'>You will be around until :</label>
						<input type='date' id='endDate' name='endDate' className='allBoxContact' />
					</div>
					<div className='infoContactForm'>
						<label htmlFor='experiencesList'>Select your Experience: </label>
						<select id='experiencesList' name='experiencesList' className='allBoxContact'>
							<option value='Marão'>Marão</option>
							<option value='Verde'>Verde</option>
							<option value='Amarante'>Amarante</option>
							<option value='Aboboreira'>Aboboreira</option>
							<option value='Pastries'>Pastries</option>
							<option value='Kayak'>Kayak</option>
							<option value='Amadeo'>Amadeo</option>
							<option value='Hiking'>Hiking</option>
							<option value='Romanesque'>Romanesque</option>
						</select>
					</div>
					<div className='infoContactForm'>
						<div className='contactForm'>
							<label htmlFor='name'>Name: </label>
							<input type='text' id='name' name='name' placeholder='First and Last Name' className='boxSize allBoxContact' required />
						</div>

						<div className='contactForm'>
							<label htmlFor='email'>Email: </label>
							<input type='email' id='email' name='email' placeholder='Email' className='allBoxContact' required />
						</div>

						<div className='contactForm'>
							<label htmlFor='phoneNumber'>Phone: </label>
							<input type='phoneNumber' id='phoneNumber' name='phoneNumber' placeholder='Phone Number' pattern='[0-9]*' className=' allBoxContact' required />
						</div>
					</div>
					<div className='textBoxContactForm'>
						<label htmlFor='message' className='writeMessage'>
							Your Message:
						</label>
						<textarea id='message' name='message' rows='4' cols='50' placeholder='Write here your message' className='contactTextArea allBoxContact'></textarea>
					</div>
				</div>

				<input type='submit' value='Send' className='sendButton btnSendSize allBoxContact' />
			</form>
		</div>
	);
}

export default BookNowView;
