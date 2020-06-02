import axios from 'axios'
import { User } from '../types/User'

const baseUrl = '/api/users'

const addUser = async (user : User) => {
	const res = await axios.post(`${baseUrl}`, user)
	return res
}

export default { addUser }
