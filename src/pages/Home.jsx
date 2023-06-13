import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'
import About from '../components/about/About'
import Banner from '../components/banner/Banner'
import BookForm from '../components/book-form/BookForm'
import Destination from '../components/destination/Destination'
import Offer from '../components/offer/Offer'
import Services from '../components/services/Services'

function Home() {
	useEffect(() => {
		AOS.init({
			once: true,
		})
	}, [])

	return (
			<>
				<Offer />
				<BookForm />
				<About />
				<Services />
				<Destination />
				<Banner />
			</>
	)	
}

export default Home
