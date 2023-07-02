import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:3000'


export const createOrder = ({ excursionId: excursion, firstName, lastName, phone, email }) => {

	return axios({
		method: 'post',
		data: { 
			excursion,
			firstName,
			lastName,
			phone,
			email
		},
		url: '/orders',
	})
}
