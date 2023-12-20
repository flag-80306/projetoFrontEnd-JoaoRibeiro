import { Link } from 'wouter'; // npm i wouter

function NavBar() {
	return (
		<>
			<div className='topHeader'></div>
			<div className='navBar'>
				<nav className='headerMenu'>
					<div className='headerMenuLogo'>
						<a href='./index.html'>
							<img src='/img/logo.png' className='logoHome' id='logoHome' />
						</a>
					</div>
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
		</>
	);
}

export default NavBar;
