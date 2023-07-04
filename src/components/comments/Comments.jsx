import { Formik } from 'formik'
import { Link } from 'react-router-dom'
import * as yup from 'yup'
import { createComment } from '../../api/comment'
import './Comment.scss'

const formCommentSchema = yup.object().shape({
	nickName: yup.string().required('Поле Имя необходимо заполнить'),
	message: yup.string().required('Поле Отзыв необходимо заполнить'),
})

export const Comments = ({ excursionId, comments }) => {
	const onSubmitHandlerComment = (values, { resetForm }) => {
		const { nickName, message, image } = values
		console.log(values)

		createComment(excursionId, {
			nickName,
			message,
			image,
		}).then(resp => {
			console.log(resp)
			resetForm()
		})
	}

	const handleFileChange = (event) => {
		
	}

	const handleUpload = () => {

		// const data = new FormData();
		// data.append('uploadFile', file, file.name)

		// метод из API post
		// uploadImage(data);
		//{method: 'POST', url:requestUrl, data: data}

	}

	return (
		<div className='comments-container'>
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

				{/* <input type='file' onChange={handleFileChange} />
				<button onClick={handleUpload}>Загрузить</button> */}
			</div>
			{comments.length > 0 &&
				comments.map((comment, id) => (
					<div key={id} className='comments'>
						<h3>{comment.nickName}</h3>
						<p>{comment.message}</p>
					</div>
				))}
		</div>
	)
}
