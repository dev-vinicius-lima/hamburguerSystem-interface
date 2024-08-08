import axios from 'axios'

const apiBigFomee = axios.create({
	baseURL: 'http://localhost:3333',
})
apiBigFomee.interceptors.request.use(async (config) => {
	const userData = localStorage.getItem('bigFomee: userData')
	const token = userData && JSON.parse(userData).token
	if (token) {
		config.headers.Authorization = `Bearer ${token}`
	}
	return config
})
export default apiBigFomee
