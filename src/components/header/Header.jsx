import { Link } from "react-router-dom"

const Header = () => {
	return (
		<div className='header'>
			<div id='menu-btn' className='fas fa-bars'></div>
			<Link href='#' className='logo'>
				X<span>T</span>omsk
			</Link>
			<nav className='navbar'>
				<Link href='#home'>
					Главная
				</Link>
				<Link href='#about'>
					о нас
				</Link>
				<Link href='#services'>
					услуги
				</Link>
				<Link href='#destinations'>
					экскурсии
				</Link>
			</nav>
			<Link
				href='#book-form'
				className='btn'
			>
				забронируй
			</Link>
		</div>
	)
}

export default Header
