const Services = () => {
	return (
		<section className='services' id='services'>
			<div className='heading'>
				<span>наши услуги</span>
				<h1>рентабельны</h1>
			</div>
			<div className='box-container'>
				<div className='box' data-aos='zoom-in-up' data-aos-delay='150'>
					<i className='fas fa-globe'></i>
					<h3>Особенное</h3>
					<p>мы отобрали только самые интересные экскурсии.</p>
				</div>
				<div className='box' data-aos='zoom-in-up' data-aos-delay='300'>
					<i className='fas fa-hiking'></i>
					<h3>преключения</h3>
					<p>пойдя на экскурсии с нами, вы получите незабываемые эмоции.</p>
				</div>
				<div className='box' data-aos='zoom-in-up' data-aos-delay='450'>
					<i className='fas fa-utensils'></i>
					<h3>еда & напитки</h3>
					<p>
						в каждой из наших экскурсий, мы идём в лучшие заведения города, и
						кушаем!
					</p>
				</div>
				<div className='box' data-aos='zoom-in-up' data-aos-delay='600'>
					<i className='fas fa-hotel'></i>
					<h3>Проживание</h3>
					<p>
						по необходимости, мы занимаемся расселением новоприбывших туристов.
					</p>
				</div>
				<div className='box' data-aos='zoom-in-up' data-aos-delay='750'>
					<i className='fas fa-wallet'></i>
					<h3>доступная цена</h3>
					<p>наши цены, самые низкие в городе!</p>
				</div>
				<div className='box' data-aos='zoom-in-up' data-aos-delay='900'>
					<i className='fas fa-headset'></i>
					<h3>24/7 поддержка</h3>
					<p>
						вы можете написать/позвонить нам в любое время, ответим на любые
						интересующие вас вопросы.
					</p>
				</div>
			</div>
		</section>
	)
}

export default Services
