import React, { useContext, useEffect } from 'react'
import authContext from '../../context/Auth/authContext'

const Post = props => {
	const { loadUser } = useContext(authContext)

	useEffect(() => {
		console.log(props.data)
		loadUser()
		// eslint-disable-next-line
	}, [])
	return (
		<>
			{!props.data ? (
				<></>
			) : (
				props.data.map(e => (
					<div className='container col l6 m6  center post-card' key={e._id}>
						<div className='card-body'>
							<div className='card mycard  amber darken-4 z-depth-4'>
								<div className='card-content white-text'>
									<span className='card-title'>{e.title}</span>
									<p>{e.body}</p>
								</div>
							</div>
						</div>
					</div>
				))
			)}
			{}
		</>
	)
}

export default Post
