import React from 'react'
import ProtectedManage from '../../components/ProtectedManage'
import MainLayout from '../../layouts/main'

const Manage: React.FC = () => {
	return (
		<ProtectedManage>
			<MainLayout />
		</ProtectedManage>
	)
}

export default Manage
