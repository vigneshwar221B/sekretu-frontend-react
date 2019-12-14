import React, {useContext, useState, useEffect} from 'react'
import authContext from '../../context/Auth/authContext'

const Register = (props) => {

	const {register, isAuthenticated} = useContext(authContext)

	const [state, setstate] = useState({
		name: '',
		email: '',
		password: ''
	})

	const onsubmit = e => {
		e.preventDefault()
		console.log('submitted');

		register(state);
	}

	const onchange = e => {
		setstate({
			...state,
			[e.target.name]: e.target.value
		})
	}

	useEffect(() => {
		if (isAuthenticated) {
			props.history.push('/home');
		}
		//eslint-disable-next-line
	}, [isAuthenticated])

	return (
		<div className='container'>
			<div className='row'>
				<div className='col m3'></div>
				<div className='col m6'>
					<h2 className='center-align'>register</h2>
					<div className='row'>
						<form className='col s12' onSubmit={onsubmit}>
							<div className='row'>
								<div className='input-field col s12'>
									<input id='name' value={state.name}
										onChange={onchange}
										name="name" type='text'
										autoComplete="new-password"></input>
									<label htmlFor='name'>Username</label>
								</div>
							</div>
							<div className='row'>
								<div className='input-field col s12'>
									<input id='email' onChange={onchange}
										value={state.email} name="email" type='email' autoComplete="new-password"></input>
									<label htmlFor='email'>Email</label>
								</div>
							</div>
							<div className='row'>
								<div className='input-field col s12'>
									<input id='pass' onChange={onchange}
										value={state.password} name="password" type='password' className='validate' autoComplete="new-password" />
									<label htmlFor='pass'>Password</label>
								</div>
							</div>
							<div className='row'>
								<div className='input-field col s12'>
									<input
										id='confirmpass'
										type='password'
										className='validate'
										autoComplete="new-password"
										name="cpassword"
									/>
									<label htmlFor='confirmpass'>confirmPassword</label>
								</div>
							</div>

							<div className='row'>
								<div className='col m12'>
									<p className='right-align'>
										<button
											className='btn btn-large waves-effect waves-light  amber darken-4'
											name='action'
										>
											Register
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

export default Register
