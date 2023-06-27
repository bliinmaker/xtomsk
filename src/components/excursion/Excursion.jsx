import dayjs from 'dayjs'
import { useEffect, useRef, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import * as yup from 'yup'
import { getExcursion } from '../../api/excursions'
import { createOrder } from '../../api/order'
import { Button } from '../button/Button'
import { Input } from '../input/Input'
import './Excursion.scss'

const phoneRegExp =
	/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im

const formSchema = yup.object().shape({
	firstName: yup.string().required('Поле Имя необходимо заполнить'),
	lastName: yup.string().required('Поле Фамилия необходимо заполнить'),
	phoneNumber: yup
		.string()
		.required('Поле Телефон необходимо заполнить')
		.matches(phoneRegExp, { message: 'Телефон введен неверно' }),
	emailAddress: yup
		.string()
		.required('Поле Email необходимо заполнить')
		.email('Email введен неверно'),
})

export const Excursion = () => {
	const [excursion, setExcursion] = useState(null)
	const [name, setName] = useState()
	const [surName, setSurName] = useState()
	const [phone, setPhone] = useState()
	const [email, setEmail] = useState()
	const [isVisibleForm, setIsVisibleForm] = useState(false)
	const [errorsForm, setErrorsForm] = useState({})
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

	const errors = {}

	const onSubmitHandler = event => {
		event.preventDefault()

		createOrder({
			excursion: excursionId,
			firstName: name,
			lastName: surName,
			phone: phone,
			email: email,
		}).then(resp => {
			console.log(resp)
		})

		const firstName = event.target.firstName.value
		const lastName = event.target.lastName.value
		const phoneNumber = event.target.phoneNumber.value
		const emailAddress = event.target.emailAddress.value

		try {
			formSchema.validateSync(
				{
					firstName,
					lastName,
					phoneNumber,
					emailAddress,
				},
				{ abortEarly: false }
			)
			setErrorsForm({})
		} catch (err) {
			const yupErrors = err.inner
			for (const yupError of yupErrors) {
				errors[yupError.path] = yupError.message
			}
			console.log(errors)
			setErrorsForm(errors)
		}
	}

	if (!excursion) {
		return <div>Loading...</div>
	}

	return (
		<section className='excursion' id='excursion'>
			<div className='excursion-wrap'>
				<div className='photo-container'>
					<img src='https://placekitten.com/640/360' className='image' />
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
					<form method='post' onSubmit={onSubmitHandler}>
						<Input
							title='Имя'
							errorText={errorsForm['firstName']}
							valueText={name}
							onChange={e => setName(e.target.value)}
							name='firstName'
							type='text'
							placeholder='Иван'
						/>
						<Input
							title='Фамилия'
							errorText={errorsForm['lastName']}
							valueText={surName}
							onChange={e => setSurName(e.target.value)}
							name='lastName'
							type='text'
							placeholder='Иванов'
						/>
						<Input
							title='Телефон'
							errorText={errorsForm['phoneNumber']}
							valueText={phone}
							onChange={e => setPhone(e.target.value)}
							refEl={phoneRef}
							type='text'
							placeholder='+7(913)-888-88-88'
							name='phoneNumber'
						/>
						<Input
							title='Email'
							errorText={errorsForm['emailAddress']}
							valueText={email}
							onChange={e => setEmail(e.target.value)}
							refEl={emailRef}
							type='text'
							placeholder='ivan@gmail.com'
							name='emailAddress'
						/>
						<Button typeText='submit' valueText='Отправить' />
					</form>
				</div>
			)}
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
				<div className='comments'>
					<h3>Kinozemts</h3>
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
