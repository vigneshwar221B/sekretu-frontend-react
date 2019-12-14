import React, { useEffect, useState } from 'react'
import Post from './Post'
import axios from 'axios'

const Posts = () => {
	const BASE_URL = 'http://localhost:8080'
	const [posts, setposts] = useState([])
	useEffect(() => {
		axios
			.get(`${BASE_URL}`)
			.then(res => {
				console.log(res.data)

				setposts(res.data)
			})
			.catch(err => console.log('errrr' + err))
	}, [])

	return (
		<div className='container row post-card-body'>
			
				<Post data={posts} />
			
		</div>
	)
}

export default Posts
