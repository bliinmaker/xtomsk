import dayjs from 'dayjs'
import { Formik } from 'formik'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Rating } from 'react-simple-star-rating'
import * as yup from 'yup'
import { getExcursion } from '../../api/excursions'
import { createOrder } from '../../api/order'
import { getExcursionRating, rateExcursion } from '../../api/rateExcursion'
import { Button } from '../button/Button'
import { Comments } from '../comments/Comments'
import { Input } from '../input/Input'
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

// const formCommentSchema = yup.object().shape({
// 	nickName: yup.string().required('Поле Имя необходимо заполнить'),
// 	message: yup.string().required('Поле Отзыв необходимо заполнить'),
// })

export const Excursion = () => {
	const [excursion, setExcursion] = useState(null)
	const [isVisibleForm, setIsVisibleForm] = useState(false)
	const [rating, setRating] = useState(0)
	let { excursionId } = useParams()

	useEffect(() => {
		getExcursion(excursionId).then(resp => {
			if (resp.status === 200) {
				setExcursion(resp.data)
				console.log(resp.data)
			}
		})
	}, [])

	useEffect(() => {
		getExcursionRating(excursionId).then(resp => {
			if (resp.status === 200) {
				setRating(resp.data.average)
				console.log(resp.data.average)
				console.log(resp.data.rating)
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
	}

	const handleRating = rating => {
		const isRated = localStorage.getItem('isRated')

		if (isRated !== 'true') {
			rateExcursion(excursionId, rating)
			localStorage.setItem('isRated', 'true')
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
						<Rating
							onClick={handleRating}
							initialValue={rating}
						/>
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
			{excursion && (
				<Comments excursionId={excursionId} comments={excursion.comments} />
			)}
		</section>
	)
}
