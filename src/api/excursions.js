import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:3000'

export const getExcursions = ({ title, theme, date }) => {
	let params = new URLSearchParams()

	theme && params.set('theme', theme)
	title && params.set('title', title)
	date && params.set('date', date)

	// console.log(params.toString())

	///excursions?theme=какая-то тема&date=2023-05-31&title=имя

	// const requestUrl = '/excursions' + '?' + params.toString()

	const requestUrl = `/excursions?${params.toString()}`

	return axios({
		method: 'get',
		url: requestUrl,
	})
}

export const getExcursion = id => {
	const requestUrl = '/excursions/' + id

	return axios({
		method: 'get',
		url: requestUrl,
	})
}
