import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'
import About from './about/About'
import Banner from './banner/Banner'
import BookForm from './book-form/BookForm'
import Destination from './destination/Destination'
import Footer from './footer/Footer'
import Header from './header/Header'
import Offer from './offer/Offer'
import Services from './services/Services'

function Home() {
	return (
		useEffect(() => {
			AOS.init()
		}, []),
		(
			<>
				<Header />
				<Offer />
				<BookForm />
				<About />
				<Services />
				<Destination />
				<Banner />
				<Footer />
			</>
		)
	)
}

export default Home
