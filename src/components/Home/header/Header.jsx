const Header = () => {
	return (
		<div className='header'>
			<div id='menu-btn' className='fas fa-bars'></div>
			<a href='#' data-aos='zoom-in-left' data-aos-delay='150' className='logo'>
				X<span>T</span>omsk
			</a>
			<nav className='navbar'>
				<a href='#home' data-aos='zoom-in-left' data-aos-delay='300'>
					Главная
				</a>
				<a href='#about' data-aos='zoom-in-left' data-aos-delay='450'>
					о нас
				</a>
				<a href='#services' data-aos='zoom-in-left' data-aos-delay='600'>
					услуги
				</a>
				<a href='#destinations' data-aos='zoom-in-left' data-aos-delay='750'>
					экскурсии
				</a>
			</nav>
			<a
				href='#book-form'
				className='btn'
				data-aos='zoom-in-left'
				data-aos-delay='1200'
			>
				забронируй
			</a>
		</div>
	)
}

export default Header
