import axios from 'axios'
import { API_HOST } from '../config/config'

axios.defaults.baseURL = API_HOST

export const getExcursionRating = (excursionId) => {

	const requestUrl = `/excursions/${excursionId}/rating`

	return axios({
		method: 'get',
		url: requestUrl,
	})
}

export const rateExcursion = (excursionId, rating) => {
    const requestUrl = `/excursions/${excursionId}/rating`

	return axios({
		method: 'post',
		data: {rating},
		url: requestUrl,
	})
}
