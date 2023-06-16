const Excursion = () => {
	return (
		<section className='excorsion' id='excorsion'>
			<div className='photo-container'>
				<img src='images/des-1.jpeg' className='image'></img>
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
				<h3>Всё о Томске за 3 часа</h3>
				<span>10.05.2023</span>
				<p>
					Экскурсия для тех, кто хочет узнать как можно больше о Сибирских
					Афинах! В программе: главные достопримечательности города, юбимые
					всеми памятники, объекты деревянного зодчества, Татарская слобода,
					рассказы о первом в Сибири университете и Чехове — в общем о самых
					значимых моментах для города. Но не забудем увидеть и тайные места, о
					которых не подозревают даже местные.
				</p>
				<a href='#' className='btn'>
					забронируй
				</a>
			</div>
		</section>
	)
}

export default Excursion
