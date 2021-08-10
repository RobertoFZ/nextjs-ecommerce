import React, { ReactElement } from 'react'
import HeroBackground from 'components/atoms/Hero/HeroBackground'
import HeroTitle from 'components/atoms/Hero/HeroTitle'
import { Container, Grid } from '@material-ui/core'
import HeroSubTitle from 'components/atoms/Hero/HeroSubTitle'
import AppButton from 'components/atoms/AppButton'
import colors from 'shared/constants/colors'
import TextAlign, { EAlign } from 'components/atoms/TextAlign'
import Slider from '../Slider/Slider'
import { ISlideElement } from 'shared/interfaces/Slider'

const Hero = (): ReactElement => {
	const slides: ISlideElement[] = [
		{
			src: '/images/slider/slider_1.jpg',
		},
		{
			src: '/images/slider/slider_2.jpg',
		},
		{
			src: '/images/slider/slider_3.jpg',
		},
	]
	return (
		<HeroBackground>
			<Grid container alignItems="center">
				<Grid item xs={12} lg={6}>
					<Container>
						<HeroTitle variant="h1">Stone Crafters</HeroTitle>
						<HeroSubTitle variant="h4">
							From artisans to the world
						</HeroSubTitle>
						<TextAlign sm={EAlign.CENTER} lg={EAlign.LEFT}>
							<AppButton href="#contained-buttons" lgMargin={50}>
								Shop now
							</AppButton>
							<AppButton
								backgroundColor={colors.WHITE}
								href="#contained-buttons"
							>
								View collection
							</AppButton>
						</TextAlign>
					</Container>
				</Grid>
				<Grid item xs={12} lg={6}>
					<Slider slides={slides} />
				</Grid>
			</Grid>
		</HeroBackground>
	)
}

export default Hero
