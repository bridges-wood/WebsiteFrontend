import axios from 'axios'

const baseUrl = '/api/projects'

let token: string | null = null

const setToken = (newToken: string) => {
	token = `bearer ${newToken}`
}

const getAll = async (refresh: boolean) => {
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
