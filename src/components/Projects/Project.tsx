import React, { useEffect } from 'react'
import { useRouteMatch } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import ReactMarkdown from 'react-markdown'
import Languages from './Languages'
import Loading from '../Loading/Loading'
import { Project as ProjectType } from '../../types/Project'
import { RootState } from '../../store'
import styles from './Projects.module.css'
import LanguageTable from './LanguageTable'
import { initializeProjects } from '../../reducers/projects/projectActions'


const Project = () => {
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(initializeProjects())
	}, [dispatch])

	useEffect(() => {
		window.scrollTo(0,0)
	}, [])

	const projects = useSelector((state: RootState) => state.projects.projects)
	const error = useSelector((state: RootState) => state.projects.error)
	const theme = useSelector((state: RootState) => state.theme.theme)
	
	const match : {params : {
		id: string
	}} = useRouteMatch('/projects/:id')
	const project = match
		? projects.find((p : ProjectType) => p.id === Number(match.params.id))
		: null

	if (!project) {
		return (
			<div className={styles.loading}>
				<Loading />
			</div>
		)
	}

	if (error) {
		return (
			<div>
				<p>Error...</p>
			</div>
		)
	}

	return (
		<div className={styles.project}>
			<div className={styles.languageContainer}>
				<Languages languages={project.languages} className={'languages'} circle/>
				<LanguageTable languages={project.languages} className={'table'} />
			</div>
			
			 <div className={`${styles.readme} ${styles[theme]}`}>
				{project.README !== null
				? <ReactMarkdown source={project.README} />
				: <>
					<h1>{project.name}</h1>
					<p>This project does not currently have a README, however, that doesn't
						mean that you can't check out my code <a href={project.url}>here.</a>
					</p>
				</>}
			</div>
		</div>
	)
}

export default Project
