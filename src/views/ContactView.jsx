import { Link } from 'wouter'; // npm i wouter
function ContactView() {
	function handleSubmit(event) {
		// ou --> const handleSubmit = event => {
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
	}
	// for (var i = 0; i < 5; i++) {
	// 	setTimeout(function () {
	// 		console.log(i);
	// 		console.log('-');
	// 	}, i * 1000);
	// }
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
					<form onSubmit={handleSubmit} method='post' className='contactForm'>
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

						<div className='contactMessage'>
							<label htmlFor='message' className='writeMessage'>
								Your Message:
							</label>

							<textarea id='message' name='message' rows='4' cols='50' placeholder='Write here your message' className='contactTextArea allBoxContact  '></textarea>
						</div>
						<div className='sendButtonContainer'>
							<input type='submit' value='Send' className='sendButton btnSendSize' />
						</div>
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
