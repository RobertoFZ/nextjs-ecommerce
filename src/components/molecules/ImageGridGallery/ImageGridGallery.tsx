import React from 'react'
import { ReactElement } from 'react'
import { ImageGridElement } from 'shared/interfaces/ImageGrid'
import GalleryImage from './GalleryImage'
import ImageGridContainer from './ImageGridContainer'
import ImageGridItem from './ImageGridItem'
import ImageDetail from './ImageDetail'
import ImageActions from './ImageActions'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import VisibilityIcon from '@material-ui/icons/Visibility'
import MenuIconButton from 'components/atoms/Navbar/MenuIconButton'

interface IImageGallery {
	images: ImageGridElement[]
}

const ImageGridGallery = ({ images }: IImageGallery): ReactElement => {
	return (
		<ImageGridContainer>
			{images.map(({ src, ...rest }) => (
				<ImageGridItem key={src} {...rest}>
					<ImageDetail>
						<ImageActions>
							<MenuIconButton color="inherit" arial-label="cart">
								<ShoppingCartIcon />
							</MenuIconButton>
							<MenuIconButton color="inherit" arial-label="see">
								<VisibilityIcon />
							</MenuIconButton>
						</ImageActions>
					</ImageDetail>
					<GalleryImage src={src} />
				</ImageGridItem>
			))}
		</ImageGridContainer>
	)
}

export default ImageGridGallery
