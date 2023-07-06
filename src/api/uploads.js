import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:3000'


export const uploadImage = (imageData) => {
    const requestUrl = '/uploads/image'

	return axios({
		method: 'post',
		data: imageData,
		url: requestUrl,
	})
}
