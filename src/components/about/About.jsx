import { Link } from 'react-router-dom'
import video_about from '../../assets/about.mp4'

const About = () => {
	return (
		<section className='about' id='about'>
			<div
				className='video-container'
				data-aos='fade-right'
				data-aos-delay='300'
			>
				<video
					src={video_about}
					muted
					autoPlay
					loop
					className='video'
				></video>
			</div>
			<div className='content' data-aos='fade-left' data-aos-delay='600'>
				<span>Кто мы ?</span>
				<h3>мы дарим улыбку</h3>
				<p>
					Наша компания экскурсий предлагает уникальные и захватывающие
					путешествия по всему городу, которые позволят вам открыть новые
					культуры, познакомиться с историей и насладиться неповторимыми
					природными красотами. Мы гарантируем незабываемые впечатления и опыт,
					который останется с вами на всю жизнь.
				</p>
				<Link href='/excursion' className='btn'>
					подробнее
				</Link>
			</div>
		</section>
	)
}

export default About
