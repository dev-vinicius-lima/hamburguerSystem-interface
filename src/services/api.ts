import axios from 'axios'

const apiBigFomee = axios.create({
	baseURL: 'http://localhost:3333',
})

export default apiBigFomee
