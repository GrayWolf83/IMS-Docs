import React from 'react'

interface ITemplateName {}

const TemplateName: React.FC<ITemplateName> = () => {
	return (
		<div data-testid='TemplateName'>
			<h2>TemplateName</h2>
		</div>
	)
}

export default TemplateName
