import axios from 'axios'
import { User } from '../types/User'

const baseUrl = '/api/login'

const login = async (credentials : { username: string, password: string }): Promise<User> => {
	const res = await axios.post(baseUrl, {...credentials, verify: false})
	return res.data
}

const verify = async (user : object): Promise<User> => {
	const res = await axios.post(baseUrl, {...user, verify: true})
	return res.data
}

export default { login, verify }
