import NavBar from '../NavBar.jsx';
import FooterBar from '../FooterBar.jsx';
function Card() {
	return (
		<>
			<NavBar />
			<div className='contactTitle'>
				<div className='homeImageTitle'>
					<div className='homePageTitle'>
						<h1>titulo</h1>
						<h3>
							<datagrid>13-03-2020 </datagrid>
						</h3>
						<img src='/img/slide_4.JPG' alt='' />
					</div>
					<div>
						<p>
							mapa <img src='https://www.oficinadanet.com.br/media/post/27852/750/adicionar-parada.jpg' alt='mapa' />
						</p>
						<section>
							<p></p>
							<img src='/img/slide_4.JPG' alt='tempo' />
						</section>
					</div>
				</div>
			</div>
			<FooterBar />
		</>
	);
}

export default ContactView;
