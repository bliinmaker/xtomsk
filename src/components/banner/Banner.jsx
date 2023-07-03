import { Link } from 'react-router-dom'
import './Banner.scss'

const Banner = () => {
	return (
		<div className='banner'>
			<div className='content' data-aos='zoom-in-up' data-aos-delay='300'>
				<span>Начни свое путешествие</span>
				<h3>Вместе с нами</h3>
				<p>Уникальное и захватывающее путешествие по всему городу!</p>
				<Link className='btn' href='#book-form'>
					Забронируй
				</Link>
			</div>
		</div>
	)
}

export default Banner
