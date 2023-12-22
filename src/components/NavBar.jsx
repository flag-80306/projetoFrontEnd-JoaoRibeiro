import { Link } from 'wouter'; // npm i wouter

function NavBar() {
	return (
		<>
			<div className='topHeader'></div>
			<div className='navBar'>
				<nav className='headerMenu'>
					<a href='./index.html' className='headerMenuLogo'>
						<img src='/img/logo.png' className='logoHome' id='logoHome' />
					</a>

					<div className='headerMenuOptions'>
						<div className='mainMenu'>
							<ul className='mainMenuList'>
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
										<h3>About us</h3>
									</Link>
								</li>
								<li>
									<Link href='/Contact'>
										<h3>Contact Us</h3>
									</Link>
								</li>
							</ul>
						</div>
					</div>
				</nav>
			</div>
			<div className='headerMenuMobile'>
				<button>
					<img className='menuMobileIcon' src='./img/mobileMenu/menu_white_36dp.svg' alt='mobile menu icon' />
				</button>
			</div>
			<div className='mobileMenu'>
				<div className='mainMobileMenu'>
					<Link href='/'>
						<h3>Home</h3>
					</Link>

					<Link href='/Experiences'>
						<h3>Experiences</h3>
					</Link>

					<Link href='/AboutUs'>
						<h3>About us</h3>
					</Link>

					<Link href='/Contact'>
						<h3>Contact Us</h3>
					</Link>
				</div>
			</div>
		</>
	);
}

export default NavBar;
