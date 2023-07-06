import dayjs from 'dayjs'
import { Formik } from 'formik'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import * as yup from 'yup'
import { createComment } from '../../api/comment'
import { uploadImage } from '../../api/uploads'
import './Comment.scss'
const formCommentSchema = yup.object().shape({
	nickName: yup.string().required('Поле Имя необходимо заполнить'),
	message: yup.string().required('Поле Отзыв необходимо заполнить'),
})

export const Comments = ({ excursionId, comments }) => {
	const [file, setFile] = useState(null)
	const [imageSrc, setImageSrc] = useState(null)

	const onSubmitHandlerComment = (values, { resetForm }) => {
		const { nickName, message, image } = values
		console.log(values)

		createComment(excursionId, {
			nickName,
			message,
			image: imageSrc || '',
		}).then(resp => {
			console.log(resp)
			resetForm()
		})
	}

	const handleFileChange = event => {
		if (event.target.files) {
			setFile(event.target.files[0])
		}
	}

	const handleUpload = () => {
		const imageData = new FormData()
		imageData.append('uploadFile', file, file.name)
		uploadImage(imageData).then(resp => setImageSrc(resp.data.fileName))
	}
	console.log(comments)

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
							{imageSrc ? (
								<img width={200} src={'http://localhost:3000/uploads/images/' + imageSrc} />
							) : (
								<>
									<input type='file' onChange={handleFileChange} />
									<button onClick={handleUpload}>Загрузить</button>
								</>
							)}
						</form>
					)}
				</Formik>
				
			</div>
			{comments.length > 0 &&
				comments.map((comment, id) => (
					<div key={id} className='comments'>
						<div className='wrap-content'>
							<h3>{comment.nickName}</h3>
							<p>{comment.message}</p>
							{comment.image && <img width={100} src={'http://localhost:3000/uploads/images/' + comment.image}/>}
						</div>
						<p>{dayjs(comment.createdAt).format('mm:hh DD.MM.YYYY')}</p>
					</div>
				))}
		</div>
	)
}
