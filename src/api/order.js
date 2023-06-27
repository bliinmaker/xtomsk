import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:3000'

export const createOrder = ({ excursionId, firstName, lastName, phone, email }) => {
	return axios({
		method: 'post',
		data: { excursion: excursionId, firstName, lastName, phone, email },
		url: '/orders',
	})
}
