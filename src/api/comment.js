import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:3000'


export const createComment = ({ nickName, message, image }) => {

	return axios({
		method: 'post',
		data: { 
			nickName,
			message,
			image,
		},
		url: '/comments',
	})
}
