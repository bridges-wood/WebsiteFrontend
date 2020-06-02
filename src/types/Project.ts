export interface Project {
	README: string | null,
	mainLanguage: string,
	languages: {
		name: string,
		bytes: number
	}[],
	metadata: {
		repoImage : string,
		[propName: string]: any
	}
	id: number,
	name: string,
	description: string | null,
	url: 'string',
	size: number,
	__v: number
}