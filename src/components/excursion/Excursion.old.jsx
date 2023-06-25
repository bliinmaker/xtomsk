import dayjs from 'dayjs'
import { useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getExcursion } from '../../api/excursions'
import { Input } from '../input/Input'

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
	const [phoneError, setPhoneError] = useState(false)
	const [emailError, setEmailError] = useState(false)
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

	const validateEmail = () => {
		const email = emailRef.current.value

		if (!isValidEmail(email)) {
			setEmailError('Email указан неверно')
			return false
		}

		setEmailError(null)
	}

	const validatePhone = () => {
		const phone = phoneRef.current.value

		if (!isValidPhone(phone)) {
			setPhoneError('Phone указан неверно')
			return false
		}

		setPhoneError(null)
	}

	const validateForm = () => {
		validatePhone()
		validateEmail()
	}

	const onCheckPhoneHandler = () => {
		validatePhone()
	}

	const onCheckEmailHandler = () => {
		validateEmail()
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
			<div className='excursion-wrap'>
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
			</div>
			{isVisibleForm && (
				<div className='book-form'>
					<form onSubmit={onSubmitHandler}>
						<Input title='Имя' type='text' placeholder='Иван' />
						<Input title='Фамилия' type='text' placeholder='Иванов' />
						<Input
							title='Телефон'
							errorText={phoneError}
							onBlur={onCheckPhoneHandler}
							refEl={phoneRef}
							type='text'
							placeholder='+7(913)-888-88-88'
						/>
						<Input
							title='Email'
							errorText={emailError}
							onBlur={onCheckEmailHandler}
							refEl={emailRef}
							type='text'
							placeholder='ivan@gmail.com'
						/>
						<input type='submit' value='Отправить' className='btn'></input>
					</form>
				</div>
			)}
			<div className='comments'>
				<h1>Коментарии</h1>
				<div className='comment-box'>
					<form action=''>
						<input type='text'></input>
						<div className='wrap-send'>
							<div className='img'></div>
							<button>Отправить</button>
						</div>
					</form>
				</div>
				<div className='all-comments'>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad cum
						molestiae, reiciendis commodi cumque est doloremque illo vel
						repellendus nam, quod nemo magni temporibus adipisci necessitatibus
						esse tenetur saepe ratione.
					</p>
				</div>
			</div>
		</section>
	)
}
