const Header = () => {
	return (
		<div className='header'>
			<div id='menu-btn' className='fas fa-bars'></div>
			<a href='#' className='logo'>
				X<span>T</span>omsk
			</a>
			<nav className='navbar'>
				<a href='#home'>
					Главная
				</a>
				<a href='#about'>
					о нас
				</a>
				<a href='#services'>
					услуги
				</a>
				<a href='#destinations'>
					экскурсии
				</a>
			</nav>
			<a
				href='#book-form'
				className='btn'
			>
				забронируй
			</a>
		</div>
	)
}

export default Header
