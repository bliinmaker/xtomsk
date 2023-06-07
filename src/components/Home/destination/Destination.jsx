import fontawesome from '@fortawesome/fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import image_des1 from '../../../assets/des-1.jpeg'
import image_des2 from '../../../assets/des-2.jpeg'
import image_des3 from '../../../assets/des-3.jpeg'
import image_des4 from '../../../assets/des-4.jpeg'
import image_des5 from '../../../assets/des-5.jpeg'
import image_des6 from '../../../assets/des-6.jpeg'
import image_des7 from '../../../assets/des-7.jpeg'
import image_des8 from '../../../assets/des-8.jpeg'

fontawesome.library.add(faAngleRight)

const Destination = () => {
	return (
		<section className='destination' id='destinations'>
			<div className='heading'>
				<span>наши экскурсии</span>
				<h1>только взгляни</h1>
			</div>
			<div className='box-container'>
				<div className='box' data-aos='fade-up' data-aos-delay='150'>
					<div className='image'>
						<img src={image_des1} alt=''></img>
					</div>
					<div className='content'>
						<p>Всё о Томске за 3 часа</p>
						<a href='excursion/1/index.html'>
							подробнее{' '}
							<i>
								<FontAwesomeIcon icon='fas fa-angle-right' />
							</i>
						</a>
					</div>
				</div>
				<div className='box' data-aos='fade-up' data-aos-delay='300'>
					<div className='image'>
						<img src={image_des2} alt=''></img>
					</div>
					<div className='content'>
						<p>Обзорная пешеходная экскурсия по Томску</p>
						<a href='excursion/2/index.html'>
							подробнее
							<i>
								<FontAwesomeIcon icon='fas fa-angle-right' />
							</i>
						</a>
					</div>
				</div>
				<div className='box' data-aos='fade-up' data-aos-delay='450'>
					<div className='image'>
						<img src={image_des3} alt=''></img>
					</div>
					<div className='content'>
						<p>Деревянное зодчество Томска</p>
						<a href='excursion/3/index.html'>
							подробнее{' '}
							<i>
								<FontAwesomeIcon icon='fas fa-angle-right' />
							</i>
						</a>
					</div>
				</div>
				<div className='box' data-aos='fade-up' data-aos-delay='600'>
					<div className='image'>
						<img src={image_des4} alt=''></img>
					</div>
					<div className='content'>
						<p>Белозерье</p>
						<a href='excursion/4/index.html'>
							подробнее{' '}
							<i>
								<FontAwesomeIcon icon='fas fa-angle-right' />
							</i>
						</a>
					</div>
				</div>
				<div className='box' data-aos='fade-up' data-aos-delay='750'>
					<div className='image'>
						<img src={image_des5} alt=''></img>
					</div>
					<div className='content'>
						<p>Томск необыкновенный</p>
						<a href='excursion/5/index.html'>
							подробнее{' '}
							<i>
								<FontAwesomeIcon icon='fas fa-angle-right' />
							</i>
						</a>
					</div>
				</div>
				<div className='box' data-aos='fade-up' data-aos-delay='900'>
					<div className='image'>
						<img src={image_des6} alt=''></img>
					</div>
					<div className='content'>
						<p>Персональная экскурсия</p>
						<a href='excursion/6/index.html'>
							подробнее{' '}
							<i>
								<FontAwesomeIcon icon='fas fa-angle-right' />
							</i>
						</a>
					</div>
				</div>
				<div className='box' data-aos='fade-up' data-aos-delay='1050'>
					<div className='image'>
						<img src={image_des7} alt=''></img>
					</div>
					<div className='content'>
						<p>Томск купеческий</p>
						<a href='excursion/7/index.html'>
							подробнее{' '}
							<i>
								<FontAwesomeIcon icon='fas fa-angle-right' />
							</i>
						</a>
					</div>
				</div>
				<div className='box' data-aos='fade-up' data-aos-delay='1200'>
					<div className='image'>
						<img src={image_des8} alt=''></img>
					</div>
					<div className='content'>
						<p>Всё и сразу</p>
						<a href='excursion/8/index.html'>
							подробнее{' '}
							<i>
								<FontAwesomeIcon icon='fas fa-angle-right' />
							</i>
						</a>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Destination
