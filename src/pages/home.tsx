import React, { ReactNode } from 'react'
import MainLayout from 'components/layouts/MainLayout'
import Hero from 'components/molecules/Hero/Hero'
// eslint-disable-next-line
import ImageGridGallery from 'components/molecules/ImageGridGallery/ImageGridGallery'
import { ImageGridElement } from 'shared/interfaces/ImageGrid'
import { DUMMY_PRODUCTS } from 'shared/data/products'

const Home = (): ReactNode => {
	const products: ImageGridElement[] = DUMMY_PRODUCTS
	return (
		<MainLayout>
			<Hero />
			<ImageGridGallery images={products} />
		</MainLayout>
	)
}

export default Home
