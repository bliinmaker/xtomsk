import fontawesome from '@fortawesome/fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import Button from '../button/Button'
import './Footer.scss'

fontawesome.library.add(faArrowRight)

const Footer = () => {
	return (
		<>
			<section className='footer'>
				<div className='box-container'>
					<div className='box'>
						<Link href='#' className='logo'>
							X<span>T</span>omsk
						</Link>
						<p>Путешествие с нами ты никогда не забудешь!</p>
						<div className='share'>
							<Link href='#' className='fab fa-facebook-f'></Link>
							<Link href='#' className='fab fa-twitter'></Link>
							<Link href='#' className='fab fa-instagram'></Link>
							<Link href='#' className='fab fa-linkedin'></Link>
						</div>
					</div>
					<div className='box'>
						<h3>Меню</h3>
						<Link href='#home' className='links'>
							<i>
								<FontAwesomeIcon icon='fas fa-arrow-right' />
							</i>
							Главная
						</Link>
						<Link href='#about' className='links'>
							<i>
								<FontAwesomeIcon icon='fas fa-arrow-right' />
							</i>
							О нас
						</Link>
						<Link href='#services' className='links'>
							<i>
								<FontAwesomeIcon icon='fas fa-arrow-right' />
							</i>
							Услуги
						</Link>
						<Link href='#destination' className='links'>
							<i>
								<FontAwesomeIcon icon='fas fa-arrow-right' />
							</i>
							Экскурсии
						</Link>
					</div>
					<div className='box'>
						<h3>Контакты</h3>
						<p>
							<i className='fas fa-map'></i>Томск, Россия
						</p>
						<p>
							<i className='fas fa-phone'></i>+7 (903)-915-25-36
						</p>
						<p>
							<i className='fas fa-envelope'></i>xtomsk@mail.com
						</p>
						<p>
							<i className='fas fa-clock'></i>8:00 - 22:00
						</p>
					</div>
					<div className='box'>
						<h3>Новости</h3>
						<p>Подпишитесь на последние обновления</p>
						<form action=''>
							<input
								type='email'
								name=''
								className='email'
								placeholder='введите ваш email..'
							></input>
							<Button typeText='submit' valueText='подписаться' />
						</form>
					</div>
				</div>
			</section>
			<div className='credit'>
				coded by <span>the kinozemts</span> | all rights reserved
			</div>
		</>
	)
}

export default Footer
