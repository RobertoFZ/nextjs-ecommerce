import Navbar from 'components/molecules/Navbar'
import React, { useEffect } from 'react'
import Head from './Head'

// eslint-disable-next-line
interface IMainLayout {
	// Define you props if you need it
}

const MainLayout: React.FC<IMainLayout> = ({ children }) => {
	useEffect(() => {
		scrollToTop()
	}, [])

	const scrollToTop = () => {
		document.body.scrollTop = 0 // For Safari
		document.documentElement.scrollTop = 0 // Chrome - Firefox
	}

	return (
		<div>
			<Head />
			<Navbar />
			{children}
		</div>
	)
}

export default MainLayout
