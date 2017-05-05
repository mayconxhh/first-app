import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

class Error extends Component {
	render() {
		return (
			<main>
				<li><NavLink to="/">Go to Home</NavLink></li>
			</main>
		);
	}
}

export default Error;