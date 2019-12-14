import React, { useEffect } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css'

import 'materialize-css/dist/css/materialize.min.css'
import M from 'materialize-css/dist/js/materialize.min.js'

import Navbar from './components/main/NavBar'
import Main from './components/main/Main'
import Login from './components/Auth/Login'
import Register from './components/Auth/Register'
import Posts from './components/posts/Posts'
import Addpost from './components/posts/AddPost'
import PrivateRoute from './components/routing/PrivateRoute'

import AuthState from './context/Auth/AuthState'

import setAuthToken from './utils/setAuthToken'

if (localStorage.token) {
	setAuthToken(localStorage.token)
}

const App = () => {
	useEffect(() => {
		M.AutoInit()
	}, [])

	return (
		<div className='App'>
			<AuthState>
				<Router>
					<Navbar />
					<Switch>
						<Route path='/' exact component={Main} />
						<Route path='/login' exact component={Login} />
						<Route path='/register' exact component={Register} />
						<Route path='/home' exact component={Posts} />
						<PrivateRoute path='/addpost' exact component={Addpost} />
					</Switch>
				</Router>
			</AuthState>
		</div>
	)
}

export default App
