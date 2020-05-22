import axios from 'axios'

const baseUrl = '/api/login'

const login = async (creds) => {
	const res = await axios.post(baseUrl, {...creds, verify: false})
	return res.data
}

const verify = async (user) => {
	const res = await axios.post(baseUrl, {...user, verify: true})
	return res.data
}

export default { login, verify }
