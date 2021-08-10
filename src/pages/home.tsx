import React, { ReactNode } from 'react'
import MainLayout from 'components/layouts/MainLayout'
import Hero from 'components/molecules/Hero/Hero'
// eslint-disable-next-line
import ImageGridGallery from 'components/molecules/ImageGridGallery/ImageGridGallery'
import { ImageGridElement } from 'shared/interfaces/ImageGrid'

const Home = (): ReactNode => {
	const products: ImageGridElement[] = [
		{
			src: '/images/products/product_1.jpg',
			columnSm: '1/5',
			columnMd: '1',
			columnLg: '1',
			rowSm: '1',
			rowMd: '1',
			rowLg: '1',
		},
		{
			src: '/images/products/product_2.jpg',
			columnSm: '1/5',
			columnMd: '2',
			columnLg: '2',
			rowSm: '2',
			rowMd: '1',
			rowLg: '1',
		},
		{
			src: '/images/products/product_3.jpg',
			columnSm: '1/5',
			columnMd: '3',
			columnLg: '3',
			rowSm: '3',
			rowMd: '1',
			rowLg: '1',
		},
		{
			src: '/images/products/product_4.jpg',
			columnSm: '1/5',
			columnMd: '4',
			columnLg: '4',
			rowSm: '4',
			rowMd: '1/3',
			rowLg: '1/3',
		},
		{
			src: '/images/products/product_5.jpg',
			columnSm: '1/5',
			columnMd: '1',
			columnLg: '1',
			rowSm: '5',
			rowMd: '2/4',
			rowLg: '2/4',
		},
		{
			src: '/images/products/product_6.jpg',
			columnSm: '1/5',
			columnMd: '2/4',
			columnLg: '2/4',
			rowSm: '6',
			rowMd: '2/4',
			rowLg: '2/4',
		},
		{
			src: '/images/products/product_7.jpg',
			columnSm: '1/5',
			columnMd: '4',
			columnLg: '4',
			rowSm: '7',
			rowMd: '3',
			rowLg: '3',
		},
	]
	return (
		<MainLayout>
			<Hero />
			<ImageGridGallery images={products} />
		</MainLayout>
	)
}

export default Home
