import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { getExcursion } from '../../api/excursions'
import './Comment.scss'

export const Comments = ({excursion}) => {
	// const [excursions, setExcursions] = useState(null)
	// let { excursionId } = useParams()
	// useEffect(() => {
	// 	getExcursion(excursionId).then(resp => {
	// 		if (resp.status === 200) {
	// 			setExcursions(resp.data)
	// 			console.log(resp.data)
	// 		}
	// 	})
	// }, [])
    // console.log(excursion)

	return (
		<div className='comments-container'>
			<h1>Коментарии</h1>
			<div className='create-comment'>
				<form action=''>
					<h3>
						<input placeholder='Ваше имя' type='text'></input>
					</h3>
					<textarea placeholder='Ваш отзыв' rows={2}></textarea>
					<div className='wrap-send'>
						<div className='img'>
							<Link>
								<img src='../../../dist/assets/link.svg' />
							</Link>
						</div>
						<button type='submit'>Отправить</button>
					</div>
				</form>
			</div>
			{excursion.map(excursion => (
				<div className='comments'>
					<h3>{excursion.comments.nickName}</h3>
					<p>{excursion.comments.message}</p>
				</div>
			))}
		</div>
	)
}
