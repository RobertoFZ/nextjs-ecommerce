import React, { ReactElement } from 'react'
import HeroBackground from 'components/atoms/Hero/HeroBackground'
import HeroTitle from 'components/atoms/Hero/HeroTitle'

const Hero = (): ReactElement => {
	return (
		<HeroBackground>
			<HeroTitle variant="h4">
				Welcome to NextJS with TypeScript Roberto's boilerplate
			</HeroTitle>
		</HeroBackground>
	)
}

export default Hero
