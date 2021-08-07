import MainLayout from 'components/layouts/MainLayout'
import Hero from 'components/molecules/Hero'
import React, { ReactNode } from 'react'

const Home = (): ReactNode => {
	return (
		<MainLayout>
			<Hero />
		</MainLayout>
	)
}

export default Home
