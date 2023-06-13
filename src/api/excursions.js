import axios from 'axios'


axios.defaults.baseURL = 'http://localhost:3000';


export const getExcursion = () => {
    return axios.get('/excursions')

    // const requestUrl = '/excursions';
    
	// return axios({
	// 	method: 'get',
	// 	url: requestUrl,
	// });
}