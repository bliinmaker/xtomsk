import axios from 'axios'
import { API_HOST } from '../config/config'

axios.defaults.baseURL = API_HOST


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
