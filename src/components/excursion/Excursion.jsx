import dayjs from 'dayjs'
import { Formik } from 'formik'
import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import * as yup from 'yup'
import { createComment } from '../../api/comment'
import { getExcursion } from '../../api/excursions'
import { createOrder } from '../../api/order'
import { Button } from '../button/Button'
import { Input } from '../input/Input'
import Stars from '../stars/Stars'
import './Excursion.scss'
import {Comments} from '../comments/Comments'
// import Stars from '../comments/stars/Stars'

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

// const formCommentSchema = yup.object().shape({
// 	nickName: yup.string().required('Поле Имя необходимо заполнить'),
// 	message: yup.string().required('Поле Отзыв необходимо заполнить'),
// })

export const Excursion = () => {
	const [excursion, setExcursion] = useState(null)
	const [isVisibleForm, setIsVisibleForm] = useState(false)
	// const [errorsForm, setErrorsForm] = useState({})
	// const [isDisableButton, setIsDisableButton] = useState(false)
	let { excursionId } = useParams()
	// const phoneRef = useRef(null)
	// const emailRef = useRef(null)

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

	const onSubmitHandlerBook = (values, { resetForm }) => {
		const { firstName, lastName, phoneNumber, emailAddress } = values

		createOrder({
			excursionId,
			firstName,
			lastName,
			phone: phoneNumber,
			email: emailAddress,
		}).then(resp => {
			console.log(resp)
			resetForm()
		})

		// createComment({
		// 	nickName,
		// 	message,
		// 	image
		// }).then(resp => {
		// 	console.log(resp)
		// })

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

	// const onSubmitHandlerComment = (values, { resetForm }) => {
	// 	const { nickName, message, image } = values
	// 	console.log(values)

	// 	createComment(excursionId, {
	// 		nickName,
	// 		message,
	// 		image,
	// 	}).then(resp => {
	// 		console.log(resp)
	// 		resetForm()
	// 	})
	// }

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
						<Stars />
						{/* <div className='stars-wrap'>
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
						</div>*/}
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
							phoneNumber: '',
						}}
						validationSchema={formBookSchema}
						onSubmit={onSubmitHandlerBook}
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
			{/* <div className='comments-container'>
				<h1>Коментарии</h1>
				<div className='create-comment'>
					<Formik
						initialValues={{
							nickName: '',
							message: '',
							image: '',
						}}
						validationSchema={formCommentSchema}
						onSubmit={onSubmitHandlerComment}
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
							<form onSubmit={handleSubmit} method='post'>
								{touched.nickName && <p>{errors.nickName}</p>}
								<h3>
									<input
										value={values.nickName}
										onChange={handleChange}
										onBlur={handleBlur}
										placeholder='Ваше имя'
										type='text'
										name='nickName'
									></input>
								</h3>
								{touched.message && <p>{errors.message}</p>}
								<textarea
									value={values.message}
									onChange={handleChange}
									onBlur={handleBlur}
									type='text'
									name='message'
									placeholder='Ваш отзыв'
									rows={2}
								></textarea>
								<div className='wrap-send'>
									<div className='img'>
										<Link>
											<img src='../../../dist/assets/link.svg' />
										</Link>
									</div>
									<button type='submit'>Отправить</button>
								</div>
							</form>
						)}
					</Formik>
				</div>
				{excursions.comments.length > 0 &&
					excursions.comments.map((comment, id) => (
						<div key={id} className='comments'>
							<h3>{comment.nickName}</h3>
							<p>{comment.message}</p>
						</div>
					))}
			</div> */}
			{excursion && <Comments excursionId={excursionId} comments={excursion.comments}/>}
		</section>
	)
}
