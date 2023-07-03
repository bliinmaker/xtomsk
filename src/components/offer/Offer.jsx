import { Link } from 'react-router-dom'
import './Offer.scss'

const Offer = () => {
	return (
		<section className='home' id='home'>
			<div className='content'>
				<span data-aos='fade-up' data-aos-delay='150'>
					давайте начнем
				</span>
				<h3 data-aos='fade-up' data-aos-delay='300'>
					путешествие с нами
				</h3>
				<p data-aos='fade-up' data-aos-delay='450'>
					Наша компания экскурсий предлагает уникальные и захватывающие
					путешествия по всему городу!
				</p>
				<Link href='#' className='btn' data-aos='fade-up' data-aos-delay='600'>
					Забронируй
				</Link>
			</div>
		</section>
	)
}

export default Offer
