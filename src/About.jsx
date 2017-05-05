import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

class About extends Component {
	render() {
		return (
			<main>
				<li><NavLink to="/">Go to home</NavLink></li>
				<li><NavLink to="/sdsad">Other side</NavLink></li>
			</main>
		);
	}
}

export default About;