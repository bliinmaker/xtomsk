import fontawesome from '@fortawesome/fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import dayjs from 'dayjs'
import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { getExcursions } from '../../api/excursions'
import { Input } from '../input/Input'
import './BookForm.scss'

fontawesome.library.add(faAngleRight)

const BookForm = () => {
	const [findResults, setFindResults] = useState([])
	const [themes, setThemes] = useState([])
	const [isFormTouched, setIsFormTouched] = useState(false)
	const dateRef = useRef(null)
	const themeRef = useRef(null)

	useEffect(() => {
		getExcursions({}).then(resp => {
			if (resp.status === 200) {
				const currentThemes = resp.data.map(item => item.theme)
				let uniqueThemes = [...new Set(currentThemes)]
				setThemes(uniqueThemes)
				console.log(resp.data)
			}
		})
	}, [])

	const onSubmitHandler = event => {
		event.preventDefault()
		setIsFormTouched(true)

		getExcursions({
			theme: themeRef.current.value,
			date: dateRef.current.value,
		}).then(resp => {
			if (resp.status === 200) {
				setFindResults(resp.data)
				console.log(resp.data)
			}
		})
	}

	return (
		<>
			<section className='excursion-form' id='book-form'>
				<form onSubmit={onSubmitHandler}>
					<Input
						title='Город'
						type='text'
						placeholder='Томск'
						disabled={true}
					/>
					<Input
						title='Kогда хотели бы посетить?'
						type='date'
						refEl={dateRef}
					/>
					<div className='inputBox'>
						<span>Kакая тема вас интересует?</span>
						<select name='theme' placeholder='тема экскурсии' ref={themeRef}>
							{themes.map((theme, id) => (
								<option key={id} value={theme}>
									{theme}
								</option>
							))}
						</select>
					</div>
					<Input type='submit' value='Найти' className='btn'/>				</form>
			</section>

			<section className='destination-search' id='destinations'>
				{findResults &&
					findResults.map((result, id) => (
						<div key={id}>
							<div className='box-container'>
								<div className='box' data-aos='fade-up' data-aos-delay='150'>
									<div className='content'>
										<h3>{result.title}</h3>
										<p className='date'>
											{dayjs(result.date).format('DD.MM.YYYY')}
										</p>
										<h3 className='theme'>{result.theme}</h3>
										<p className='description'>{result.description}</p>
										<Link to={`excursions/${result._id}`}>
											подробнее{' '}
											<i>
												<FontAwesomeIcon icon='fas fa-angle-right' />
											</i>
										</Link>
									</div>
								</div>
							</div>
						</div>
					))}
				{isFormTouched && findResults.length === 0 && (
					<>
						<div key={findResults.id} className='destination-none'>
							<h3>Таких экскурсий пока что нет</h3>
						</div>
					</>
				)}
			</section>
		</>
	)
}

export default BookForm
