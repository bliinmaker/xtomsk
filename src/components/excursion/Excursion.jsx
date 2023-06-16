import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getExcursion } from '../../api/excursions'
import dayjs from 'dayjs'

export const Excursion = () => {
	const [excursion, setExcursion] = useState(null)
	let { excursionId } = useParams()

	useEffect(() => {
		getExcursion(excursionId).then(resp => {
			if (resp.status === 200) {
            setExcursion(resp.data)
            console.log(resp.data)
			}
		})
	}, [])

	if (!excursion) {
		return <div>Loading...</div>
	}

	return (
		<section className='excorsion' id='excorsion'>
			<div className='photo-container'>
				<img src='https://placekitten.com/640/360' className='image'></img>
			</div>
			<div className='content'>
				<div className='stars'>
					<div className='stars-wrap'>
						<input
							id='star-5'
							type='radio'
							name='rating'
							value='5'
							className='star-input'
						></input>
						<label htmlFor='star-5' className='star-label'></label>
						<input
							id='star-4'
							type='radio'
							name='rating'
							value='4'
							className='star-input'
						></input>
						<label htmlFor='star-4' className='star-label'></label>
						<input
							id='star-3'
							type='radio'
							name='rating'
							value='3'
							className='star-input'
						></input>
						<label htmlFor='star-3' className='star-label'></label>
						<input
							id='star-2'
							type='radio'
							name='rating'
							value='2'
							className='star-input'
						></input>
						<label htmlFor='star-2' className='star-label'></label>
						<input
							id='star-1'
							type='radio'
							name='rating'
							value='1'
							className='star-input'
						></input>
						<label htmlFor='star-1' className='star-label'></label>
					</div>
				</div>
				<h3>{excursion.title}</h3>
				<span>{dayjs(excursion.date).format('DD.MM.YYYY')}</span>
				<p>
					{excursion.description}
				</p>
				<a href='#' className='btn'>
					забронируй
				</a>
			</div>
		</section>
	)
}
