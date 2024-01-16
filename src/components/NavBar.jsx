import { Link } from 'wouter'; // npm i wouter

import { useState } from 'react';

function NavBar() {
	const [seeMenu, setSeeMenu] = useState(false);

	return (
		<>
			<div className='topHeader'></div>
			<nav className='navBar'>
				<Link href='/' className='headerMenu'>
					<img src='/img/logo.png' className='headerMenuLogo' id='logoHome' />
				</Link>
				{/* <>depois de adicionar a condição na className da ul vimoas adicionar uma ação onClick para abrir e fechar o menu. Aqui vamos criar uma função vazia e acrescentamos o valor setSeeMenu e recertemos o valor, se open será para fechar o menu e vice-versa </> */}
				<div
					className='hamburguerMenu'
					onClick={function () {
						setSeeMenu(!seeMenu);
					}}
				>
					<span className='mobileHamburguer'></span>
					<span className='mobileHamburguer'></span>
					<span className='mobileHamburguer'></span>
				</div>
				{/* <>na ul vamos colocar uma className com uma condição dentro com base na variavel do menu.  se a variavel (seeMenu) for verdadeira adicionamos uma className com nome open, se for falso fica sem nome na className  </> */}
				<ul className={seeMenu ? 'open' : ''}>
					<li>
						<Link href='/'>
							<h3>Home</h3>
						</Link>
					</li>
					<li>
						<Link href='/Experiences'>
							<h3>Experiences</h3>
						</Link>
					</li>
					<li>
						<Link href='/AboutUs'>
							<h3>Our Story</h3>
						</Link>
					</li>
					<li>
						<Link href='/Contact'>
							<h3>Let's Connect</h3>
						</Link>
					</li>
				</ul>
			</nav>
		</>
	);
}

export default NavBar;
