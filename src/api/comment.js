import axios from 'axios'
import { API_HOST } from '../config/config'

axios.defaults.baseURL = API_HOST


export const createComment = (excursionId, { nickName, message, image }) => {
	const requestUrl = '/comments/' + excursionId

	return axios({
		method: 'post',
		data: { 
			nickName,
			message,
			image,
		},
		url: requestUrl,
	})
}
