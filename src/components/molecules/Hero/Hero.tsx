import React, { ReactElement } from 'react'
import HeroBackground from 'components/atoms/Hero/HeroBackground'
import HeroTitle from 'components/atoms/Hero/HeroTitle'
import { Box, Container } from '@material-ui/core'
import HeroSubTitle from 'components/atoms/Hero/HeroSubTitle'
import AppButton from 'components/atoms/AppButton'
import colors from 'shared/constants/colors'
import TextAlign, { EAlign } from 'components/atoms/TextAlign'

const Hero = (): ReactElement => {
	return (
		<HeroBackground>
			<Container>
				<HeroTitle variant="h1">Stone Crafters</HeroTitle>
				<HeroSubTitle variant="h4">Mérida, Yucatán</HeroSubTitle>
				<TextAlign sm={EAlign.CENTER} lg={EAlign.LEFT}>
					<AppButton
						href="#contained-buttons"
						style={{ marginRight: '50px' }}
					>
						Comprar ahora
					</AppButton>
					<AppButton
						backgroundColor={colors.WHITE}
						href="#contained-buttons"
					>
						Ver collección
					</AppButton>
				</TextAlign>
			</Container>
		</HeroBackground>
	)
}

export default Hero
