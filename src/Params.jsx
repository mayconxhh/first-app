import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

class Params extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<main>
				<li><NavLink to="/">Go to Home</NavLink></li>
				<p>{this.props.route.foo}</p>
			</main>
		);
	}
}

export default Params;