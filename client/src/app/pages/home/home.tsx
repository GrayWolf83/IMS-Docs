import React from 'react'

interface IHome {}

const Home: React.FC<IHome> = () => {
	return (
		<div data-testid='Home'>
			<h2>Home</h2>
		</div>
	)
}

export default Home
