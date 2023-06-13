const BookForm = () => {
	return (
		<section className='book-form' id='book-form'>
			<form action='#'>
				<div className='inputBox' data-aos='zoom-in' data-aos-delay='150'>
					<span>город</span>
					<input type='text' placeholder='томск'></input>
				</div>
				<div className='inputBox' data-aos='zoom-in' data-aos-delay='300'>
					<span>когда хотели бы посетить ?</span>
					<input type='date'></input>
				</div>
				<div className='inputBox' data-aos='zoom-in' data-aos-delay='450'>
					<span>какая тема вас интересует ?</span>
					<input type='text' placeholder='тема экскурсии'></input>
				</div>
				<input
					type='submit'
					value='найти'
					data-aos='zoom-in'
					data-aos-delay='600'
					className='btn'
				></input>
			</form>
		</section>
	)
}

export default BookForm
