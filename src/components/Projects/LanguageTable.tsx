import React from 'react'
import Table from 'react-bootstrap/Table'
import { parseLanguages } from './Languages'
import styles from './Projects.module.css'
import { useSelector } from 'react-redux'
import { RootState } from '../../store'

const LanguageTable = ({ languages, className } : {
	languages: {name: string, bytes: number}[],
	className: string
	}) => {
	const theme = useSelector((state: RootState) => state.theme.theme)
	const parsedLanguages = parseLanguages(languages)
	const total = parsedLanguages.map(language => language.value).reduce((acc, cur) => acc + cur)

	return (
		<Table bsPrefix={`${styles[className]} ${styles[theme]}`}>
			<thead>
				<tr>
					<th>Language</th>
					<th>Fraction</th>
				</tr>
			</thead>
			<tbody>
				{parsedLanguages.map(
				language => (
					<tr key={language.title}>
						<td style={{color: language.color}}>{language.title}</td>
						<td>{((language.value / total) * 100).toFixed(1)}%</td>
					</tr>
				))}
			</tbody>
		</Table>
	)
}

export default LanguageTable