import axios from 'axios'

const api = axios.create({
	baseURL: 'https://meuapp.lauanexx.repl.co'
})

export default api