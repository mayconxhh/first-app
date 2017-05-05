import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

class Home extends Component {
	render() {
		return (
			<main>
				<li><NavLink to="/about">Go to about</NavLink></li>
				<li><NavLink to="/sdsad">Other side</NavLink></li>
			</main>
		);
	}
}

export default Home;