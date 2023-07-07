import axios from 'axios'
import { API_HOST } from '../config/config'

axios.defaults.baseURL = API_HOST


export const uploadImage = (imageData) => {
    const requestUrl = '/uploads/image'

	return axios({
		method: 'post',
		data: imageData,
		url: requestUrl,
	})
}
