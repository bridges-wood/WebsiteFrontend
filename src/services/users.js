import axios from 'axios'

const baseUrl = '/api/users'

const addUser = async (user) => {
	const res = await axios.post(`${baseUrl}`, user)
	return res
}

export default { addUser }
