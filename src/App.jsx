import React from 'react'
import {
	BrowserRouter as Router,
	Route,
	Switch
} from 'react-router-dom'
import Home from './Home.jsx'
import About from './About.jsx'
// import Params from './Params.jsx'
import Error404 from './Error404.jsx'

function App() {
	return (
		<Router>
			<Switch>
				<Route exact path="/" component={Home}/>
				<Route exact path="/about" component={About}/>
				<Route component={Error404}/>
			</Switch>
		</Router>
	)
}

export default App;
