import React from 'react'
import { ReactElement } from 'react'
import { ImageGridElement } from 'shared/interfaces/ImageGrid'
import GalleryImage from './GalleryImage'
import ImageGridContainer from './ImageGridContainer'
import ImageGridItem from './ImageGridItem'

interface IImageGallery {
	images: ImageGridElement[]
}

const ImageGridGallery = ({ images }: IImageGallery): ReactElement => {
	return (
		<ImageGridContainer>
			{images.map(({ src, ...rest }) => (
				<ImageGridItem {...rest}>
					<GalleryImage src={src} />
				</ImageGridItem>
			))}
		</ImageGridContainer>
	)
}

export default ImageGridGallery
