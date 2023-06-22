import dayjs from 'dayjs'
import { useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getExcursion } from '../../api/excursions'

const isValidPhone = function (phone) {
	const phoneRegExp =
		/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im

	const digits = phone.replace(/\D/g, '')

	return phoneRegExp.test(digits)
}

const isValidEmail = function (email) {
	const emailRegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

	return emailRegExp.test(email)
}

export const Excursion = () => {
	const [excursion, setExcursion] = useState(null)
	const [isVisibleForm, setIsVisibleForm] = useState(false)
	const [formError, setFormError] = useState(false)
	const [isDisableButton, setIsDisableButton] = useState(false)
	let { excursionId } = useParams()
	const phoneRef = useRef(null)
	const emailRef = useRef(null)

	useEffect(() => {
		getExcursion(excursionId).then(resp => {
			if (resp.status === 200) {
				setExcursion(resp.data)
				console.log(resp.data)
			}
		})
	}, [])

	const onShowBookHandler = () => {
		setIsVisibleForm(oldState => !oldState)
	}

	const validateForm = () => {
		const phone = phoneRef.current.value
		const email = emailRef.current.value

		if (!isValidPhone(phone)) {
			setFormError('Телефон указан неверно')
			return false
		}

		if (!isValidEmail(email)) {
			setFormError('Email указан неверно')
			return false
		}

		setFormError(null)
	}

	const onCheckErrorHandler = () => {
		validateForm()
	}

	const onSubmitHandler = event => {
		event.preventDefault()
		validateForm()
	}

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
				<p>{excursion.description}</p>
				<button onClick={onShowBookHandler} className='btn'>
					Забронируй
				</button>
			</div>
			{isVisibleForm && (
				<div className='book-form'>
					{formError && <p>{formError}</p>}
					<form onSubmit={onSubmitHandler}>
						<div className='inputBox'>
							<span>Имя</span>
							<input type='text' placeholder='Иван'></input>
						</div>
						<div className='inputBox'>
							<span>Фамилия</span>
							<input type='text' placeholder='Иванов'></input>
						</div>
						<div className='inputBox'>
							<span>Телефон</span>
							<input
								onBlur={onCheckErrorHandler}
								ref={phoneRef}
								type='text'
								placeholder='+7(913)-888-88-88'
							></input>
						</div>
						<div className='inputBox'>
							<span>Email</span>
							<input
								onBlur={onCheckErrorHandler}
								ref={emailRef}
								type='text'
								placeholder='ivan@gmail.com'
							></input>
						</div>
						<input type='submit' value='Отправить' className='btn'></input>
					</form>
				</div>
			)}
		</section>
	)
}
