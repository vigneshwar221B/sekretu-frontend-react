import React, { useContext, useState, useEffect } from 'react'
import authContext from '../../context/Auth/authContext'

const Login = props => {
	const { login, isAuthenticated } = useContext(authContext)

	const [state, setstate] = useState({
		email: '',
		password: '',
	})

	const onsubmit = e => {
		e.preventDefault()
		console.log('submitted')

		login(state)
	}

	const onchange = e => {
		setstate({
			...state,
			[e.target.name]: e.target.value,
		})
	}

	useEffect(() => {
		if (isAuthenticated) {
			props.history.push('/home')
		}
		//eslint-disable-next-line
	}, [isAuthenticated])

	return (
		<div className='container'>
			<div className='row'>
				<div className='col m3'></div>
				<div className='col m6'>
					<h2 className='center-align'>Login</h2>
					<div className='row'>
						<form className='col s12' onSubmit={onsubmit}>
							<div className='row'>
								<div className='input-field col s12'>
									<input
										id='email'
										type='email'
										autoComplete='new-password'
										name='email'
										value={state.name}
										onChange={onchange}
									></input>
									<label htmlFor='email'>Email</label>
								</div>
							</div>
							<div className='row'>
								<div className='input-field col s12'>
									<input
										id='pass'
										type='password'
										className='validate'
										autoComplete='new-password'
										name='password'
										value={state.name}
										onChange={onchange}
									/>
									<label htmlFor='pass'>Password</label>
								</div>
							</div>

							<div className='row'>
								<div className='col m12'>
									<p className='right-align'>
										<button
											className='btn btn-large waves-effect waves-light  amber darken-4'
											name='action'
										>
											Login
										</button>
									</p>
								</div>
							</div>
						</form>
					</div>
				</div>
				<div className='col m3'></div>
			</div>
		</div>
	)
}

export default Login
