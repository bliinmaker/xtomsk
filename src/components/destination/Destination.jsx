import fontawesome from '@fortawesome/fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getExcursions } from '../../api/excursions'
import './Destination.scss'

fontawesome.library.add(faAngleRight)

const Destination = () => {
	const [excursions, setExcursions] = useState([])
	useEffect(() => {
		getExcursions({}).then(resp => {
			if (resp.status === 200) {
				setExcursions(resp.data)
				console.log(resp.data)
			}
		})
	}, [])

	return (
		<section className='destination' id='destinations'>
			<div className='heading'>
				<span>наши экскурсии</span>
				<h1>только взгляни</h1>
			</div>
			<div className='box-container'>
				{excursions.map(excursion => (
					<div
						key={excursion._id}
						className='box'
						data-aos='fade-up'
						data-aos-delay='150'
					>
						<div className='image'>
							<img src={excursion.image} alt=''></img>
						</div>
						<div className='content'>
							<p>{excursion.title}</p>
							<Link to={`excursions/${excursion._id}`}>
								подробнее{' '}
								<i>
									<FontAwesomeIcon icon='fas fa-angle-right' />
								</i>
							</Link>
						</div>
					</div>
				))}
			</div>
		</section>
	)
}

export default Destination
