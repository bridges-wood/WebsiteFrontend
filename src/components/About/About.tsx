import React from 'react'
import styles from './About.module.css'

const About = () => (
	<div className={styles.about}>
		<h1>About me</h1>
		<p className={styles.aboutPara}>
			From starting programming in Python on a Raspberry Pi when I was 12, I've taught myself virtually
			everything that I know through doing. At the beginning, that was creating a program that constructed
			a house in Minecraft, eventually leading to my most recent project: this site.
		</p>
		<p className={styles.aboutPara}>
			This site is meant to be a showcase of everything that I have learned up to the point that you're 
			reading this, and I will continually be expanding it with new features and content. Every project 
			that makes its way to my Github will be here and I am excited to flesh out my development portfolio
			with new and exciting projects.
		</p>
		<h3>Planned future projects</h3>
		<ul>
			<li>Microservices</li>
			<li>Cloud computing</li>
			<li>ML</li>
			<li>Unreal Engine game development</li>
			<li>Natural Language processing</li>
		</ul>
	</div>
)

export default About