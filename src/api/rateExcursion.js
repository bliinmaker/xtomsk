import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:3000'

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
