import fontawesome from '@fortawesome/fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

fontawesome.library.add(faArrowRight)

const Footer = () => {
	return (
		<>
			<section className='footer'>
				<div className='box-container'>
					<div className='box'>
						<a href='#' className='logo'>
							X<span>T</span>omsk
						</a>
						<p>путешествие с нами ты никогда не забудешь!</p>
						<div className='share'>
							<a href='#' className='fab fa-facebook-f'></a>
							<a href='#' className='fab fa-twitter'></a>
							<a href='#' className='fab fa-instagram'></a>
							<a href='#' className='fab fa-linkedin'></a>
						</div>
					</div>
					<div className='box'>
						<h3>меню</h3>
						<a href='#home' className='links'>
							<i>
								<FontAwesomeIcon icon='fas fa-arrow-right' />
							</i>
							Главная
						</a>
						<a href='#about' className='links'>
							<i>
								<FontAwesomeIcon icon='fas fa-arrow-right' />
							</i>
							о нас
						</a>
						<a href='#services' className='links'>
							<i>
								<FontAwesomeIcon icon='fas fa-arrow-right' />
							</i>
							услуги
						</a>
						<a href='#destination' className='links'>
							<i>
								<FontAwesomeIcon icon='fas fa-arrow-right' />
							</i>
							экскурсии
						</a>
					</div>
					<div className='box' >
						<h3>контакты</h3>
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
						<h3>новости</h3>
						<p>подпишитесь на последние обновления</p>
						<form action=''>
							<input
								type='email'
								name=''
								className='email'
								placeholder='введите ваш email..'
							></input>
							<input type='submit' value='подписаться' className='btn'></input>
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
