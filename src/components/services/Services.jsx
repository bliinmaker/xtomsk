import fontawesome from '@fortawesome/fontawesome'
import {
	faGlobe,
	faHeadset,
	faHotel,
	faPersonHiking,
	faUtensils,
	faWallet,
} from '@fortawesome/free-solid-svg-icons'
import { Service } from '../service/Service'
import './Services.scss'

fontawesome.library.add(
	faGlobe,
	faPersonHiking,
	faUtensils,
	faHotel,
	faWallet,
	faHeadset
)

const Services = () => {
	return (
		<section className='services' id='services'>
			<div className='heading'>
				<span>Наши услуги</span>
				<h1>Рентабельны</h1>
			</div>
			<div className='box-container'>
				<Service
					dataAos='zoom-in-up'
					dataAosDelay='150'
					icon='fas fa-globe'
					title='Особенное'
					text='Мы отобрали только самые интересные экскурсии.'
				/>
				<Service
					dataAos='zoom-in-up'
					dataAosDelay='300'
					icon='fas fa-person-hiking'
					title='Преключения'
					text='Пойдя на экскурсии с нами, вы получите незабываемые эмоции.'
				/>
				<Service
					dataAos='zoom-in-up'
					dataAosDelay='450'
					icon='fa-solid fa-utensils'
					title='Еда & напитки'
					text='В каждой из наших экскурсий, мы идём в лучшие заведения города, и
					кушаем!'
				/>
				<Service
					dataAos='zoom-in-up'
					dataAosDelay='600'
					icon='fa-solid fa-hotel'
					title='Проживание'
					text='По необходимости, мы занимаемся расселением новоприбывших туристов.'
				/>
				<Service
					dataAos='zoom-in-up'
					dataAosDelay='750'
					icon='fa-solid fa-wallet'
					title='Доступная цена'
					text='Наши цены, самые низкие в городе!'
				/>
				<Service
					dataAos='zoom-in-up'
					dataAosDelay='900'
					icon='fa-solid fa-headset'
					title='24/7 поддержка'
					text='Вы можете написать/позвонить нам в любое время, ответим на любые
					интересующие вас вопросы.'
				/>
			</div>
		</section>
	)
}

export default Services
