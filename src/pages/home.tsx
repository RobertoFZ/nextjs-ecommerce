import React, { ReactNode } from 'react'
import MainLayout from 'components/layouts/MainLayout'
import Hero from 'components/molecules/Hero/Hero'
// eslint-disable-next-line
import ImageGridGallery from 'components/molecules/ImageGridGallery/ImageGridGallery'
import { ImageGridElement } from 'shared/interfaces/ImageGrid'
import { DUMMY_PRODUCTS } from 'shared/data/products'
import AppButton from 'components/atoms/AppButton'
import TextAlign from 'components/atoms/TextAlign'
import Featured from 'components/molecules/Featured'
import Spacing from 'components/molecules/shared/Spacing'
import { Typography } from '@material-ui/core'
// eslint-disable-next-line
import HorizontalSlider from 'components/molecules/HorizontalSlider/HorizontalSlider'
import { SLIDER_DATA } from 'shared/data/slider'

const Home = (): ReactNode => {
	const products: ImageGridElement[] = DUMMY_PRODUCTS
	return (
		<MainLayout>
			<Hero />
			<ImageGridGallery images={products} />
			<TextAlign>
				<AppButton href="#contained-buttons">Shop now</AppButton>
			</TextAlign>
			<Spacing spacing={20} />
			<Featured />
			<Spacing spacing={15} />
			<Typography component="h2" variant="h2" align="center">
				The Craftmans
			</Typography>
			<Spacing spacing={5} />
			<HorizontalSlider products={SLIDER_DATA} />
			<Spacing spacing={15} />
		</MainLayout>
	)
}

export default Home
