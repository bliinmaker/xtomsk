import dayjs from 'dayjs'
import { useEffect, useRef, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import * as yup from 'yup'
import { getExcursion } from '../../api/excursions'
import { createOrder } from '../../api/order'
import { Button } from '../button/Button'
import { Input } from '../input/Input'
import { Comments } from '../comments/Comments'
import { Formik } from 'formik';

import './Excursion.scss'

const phoneRegExp =
	/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im

const formBookSchema = yup.object().shape({
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
	const [isVisibleForm, setIsVisibleForm] = useState(false)
	// const [errorsForm, setErrorsForm] = useState({})
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

	const onSubmitHandler = (values) => {
		console.log(values)

		const {firstName, lastName, phoneNumber, emailAddress} = values;

		createOrder({
			excursionId,
			firstName,
			lastName,
			phone: phoneNumber,
			email: emailAddress,
		}).then(resp => {
			console.log(resp)
		})

		// try {
		// 	formSchema.validateSync(
		// 		{
		// 			firstName,
		// 			lastName,
		// 			phoneNumber,
		// 			emailAddress,
		// 		},
		// 		{ abortEarly: false }
		// 	)
			
		// 	setErrorsForm({})
		// } catch (err) {
		// 	const yupErrors = err.inner
		// 	for (const yupError of yupErrors) {
		// 		errors[yupError.path] = yupError.message
		// 	}
		// 	console.log(errors)
		// 	setErrorsForm(errors)
		// }
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
					<Formik 
						initialValues={{
							firstName: '',
							lastName: '',
							emailAddress: '',
							phoneNumber: ''
						}}
						validationSchema={formBookSchema}
						onSubmit={onSubmitHandler}
					>
						{({
							values,
							errors,
							touched,
							handleChange,
							handleBlur,
							handleSubmit,
							// isSubmitting,
						}) => (
							<form method='post' onSubmit={handleSubmit}>
								<Input
									title='Имя'
									errorText={touched.firstName && errors.firstName}
									onChange={handleChange}
                     				onBlur={handleBlur}
									valueText={values.firstName}
									name='firstName'
									type='text'
									placeholder='Иван'
								/>
								<Input
									title='Фамилия'
									errorText={touched.lastName && errors.lastName}
									onChange={handleChange}
                     				onBlur={handleBlur}
									valueText={values.lastName}
									name='lastName'
									type='text'
									placeholder='Иванов'
								/>
								<Input
									title='Телефон'
									errorText={touched.phoneNumber && errors.phoneNumber}
									onChange={handleChange}
                     				onBlur={handleBlur}
									valueText={values.phoneNumber}
									// refEl={phoneRef}
									type='text'
									placeholder='+7(913)-888-88-88'
									name='phoneNumber'
								/>
								<Input
									title='Email'
									errorText={touched.emailAddress && errors.emailAddress}
									onChange={handleChange}
                     				onBlur={handleBlur}
									valueText={values.emailAddress}
									// refEl={emailRef}
									type='text'
									placeholder='ivan@gmail.com'
									name='emailAddress'
								/>
								<Button typeText='submit' valueText='Отправить' />
							</form>
						)}
					</Formik>
				</div>
			)}

			<Comments />

		</section>
	)
}
