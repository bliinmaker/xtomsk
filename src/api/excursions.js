import axios from 'axios'
import { API_HOST } from '../config/config';

axios.defaults.baseURL = API_HOST

export const getExcursions = ({ title, theme, date }) => {
	let params = new URLSearchParams();

	theme && params.set('theme', theme)
	title && params.set('title', title)
	date && params.set('date', date)


	// console.log(params.toString())

	///excursions?theme=мкакая-то теа&date=2023-05-31&title=имя

	// const requestUrl = '/excursions' + '?theme=' + theme + '&title=' + title;

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
