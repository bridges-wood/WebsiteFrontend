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
	try {
		const res = await axios.get(`${baseUrl}`, config)
		return res.data
	} catch (error) {
		console.log('error', error)
	}
}

export default { getAll, setToken }
