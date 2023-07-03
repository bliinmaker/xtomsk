import { Link } from "react-router-dom"
import Button from "../button/Button"
import './Header.scss'

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
					О нас
				</Link>
				<Link href='#services'>
					Услуги
				</Link>
				<Link href='#destinations'>
					Экскурсии
				</Link>
			</nav>
			<Button typeText='submit' valueText='Забронируй'/>
		</div>
	)
}

export default Header
