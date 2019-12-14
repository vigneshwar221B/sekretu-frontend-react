import React from 'react'


import { Link } from 'react-router-dom'

const Main = () => {

	return (
		<div className='container'>
			<div className='row'>
				<div className='row s12'>
					<h2 className='center webname'>SEKRETU</h2>
				</div>
				<div className='row s12 sub-heading'>
					Veniam ea occaecat fugiat irure irure velit reprehenderit commodo
					velit velit amet. Ut deserunt exercitation Lorem ipsum enim
					exercitation sit nulla do. Pariatur consectetur dolor laborum culpa
					anim duis sunt. Tempor eu minim ea eu sunt adipisicing commodo
					reprehenderit sit sint. Veniam mollit commodo voluptate aliqua aute
					eiusmod. Tempor tempor id dolor sit velit ullamco. Et incididunt
					adipisicing ut consequat excepteur dolor eiusmod tempor sit. Ipsum
					adipisicing nisi culpa cupidatat eiusmod nostrud quis cillum veniam eu
					culpa tempor anim voluptate. Fugiat irure adipisicing ad enim velit
					nisi magna ad quis reprehenderit exercitation consequat veniam.
					Pariatur quis anim adipisicing mollit nostrud reprehenderit incididunt
					magna. Aliqua laboris velit enim enim aute eu ipsum dolore aliqua elit
					et fugiat sunt. Ut excepteur labore est qui culpa ex exercitation eu
					adipisicing cupidatat. Velit eiusmod labore cupidatat est quis nostrud
					quis.
				</div>
				<div className='row s12 btn-group'>
					<div className='col s6 '>
						<Link to='/login' className='waves-effect waves-light btn  amber darken-4 right'>
							login
						</Link>
					</div>
					<div className='col s6'>
						<Link to='/register' className='waves-effect waves-light btn  amber darken-4 left'>
							register
						</Link>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Main
