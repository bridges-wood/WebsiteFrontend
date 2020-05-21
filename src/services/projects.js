import axios from 'axios'

const baseUrl = '/api/projects'

let token = null

const setToken = (newToken) => {
	token = `bearer ${newToken}`
}

const getAll = async (refresh) => {
	const config = {
		headers: {
			Authorization: token,
		},
		params: {
			refresh,
		},
	}

	const res = await axios.get(`${baseUrl}`, config)
	return res.data
}

export default { getAll, setToken }
