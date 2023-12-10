function NavBar() {
	return (
		<>
			<div className='navBar'>
				<nav className='headerMenu'>
					<div className='headerMenuLogo'>
						<img src='./img/logo.png' alt='Logo Inside' className='logoHome' id='logoHome' />
					</div>
					<div className='headerMenuOptions'>
						<ul className='mainMenu'>
							<li>
								<a href='#'>Home</a>
							</li>
							<li>
								<a href='#'>About us</a>
							</li>
							<li>
								<a href='#'>Contact</a>
							</li>
							<li>
								<a href='#'>Blog</a>
							</li>
						</ul>
					</div>
				</nav>
			</div>
		</>
	);
}

export default NavBar;
