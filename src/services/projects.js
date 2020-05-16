import axios from 'axios'

require('dotenv').config()

const baseUrl = 'https://api.github.com'
const user = 'bridges-wood'
const config = {
	headers: { Authorization: `token ${process.env.REACT_APP_API_KEY}` },
}

const getREADME = async (name) => {
	try {
		const res = await axios.get(`${baseUrl}/repos/${user}/${name}/readme`, config)
		const readme = await axios.get(res.data.download_url)
		return readme.data
	} catch (error) {
		return null
	}
}

const getLanguages = async (name) => {
	try {
		const res = await axios.get(`${baseUrl}/repos/${user}/${name}/languages`, config)
		const languages = res.data
		return languages
	} catch (error) {
		return null
	}
}

const formatRepo = async (repo) => {
	const README = await getREADME(repo.name)
	const languages = await getLanguages(repo.name)
	return {
		id: repo.id,
		name: repo.name,
		description: repo.description,
		url: repo.html_url,
		size: repo.size,
		mainLanguage: repo.language,
		README,
		languages,
	}
}

const getAllRepos = async () => {
	const res = await axios.get(`${baseUrl}/users/${user}/repos`, config)
	const repos = []
	await res.data.forEach(async (repo) => {
		repos.push(await formatRepo(repo))
	})
	return repos
}

export default { getAllRepos, getREADME, getLanguages }
