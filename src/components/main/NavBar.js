import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import AuthContext from '../../context/Auth/authContext'

const NavBar = props => {
	const authContext = useContext(AuthContext)
	const { logout, loadUser, isAuthenticated } = authContext

	const onLogout = () => {
		logout()
	}

	const guestlink = (
		<>
			<li>
				<Link to='/login'>login</Link>
			</li>
			<li>
				<Link to='/register'>register</Link>
			</li>
		</>
	)

	const userlink = (
		<>
			<li>
				<Link to='/login' onClick={onLogout}>
					logout
				</Link>
			</li>
			<li>
				<Link to='/home'>home</Link>
			</li>
			<li>
				<Link to='/addpost'>Add Posts</Link>
			</li>
		</>
	)
	useEffect(() => {
		loadUser()
		// eslint-disable-next-line
	}, [])

	return (
		<nav>
			<div className='nav-wrapper amber darken-2'>
				<ul id='nav' className='left'>
					<li>
						<Link id='logo' to='/'>
							SEKRETU
						</Link>
					</li>
				</ul>

				<ul id='nav' className='right'>
					{isAuthenticated ? userlink : guestlink}
				</ul>
			</div>
		</nav>
	)
}

export default NavBar
