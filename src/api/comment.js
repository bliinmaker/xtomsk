import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:3000'


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
