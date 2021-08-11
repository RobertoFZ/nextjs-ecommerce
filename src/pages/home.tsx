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
		</MainLayout>
	)
}

export default Home
