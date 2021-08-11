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
import { formatMoney } from 'shared/utils/money'
import ImagePrice from './ImagePrice'
import ImageName from './ImageName'

interface IImageGallery {
	images: ImageGridElement[]
}

const ImageGridGallery = ({ images }: IImageGallery): ReactElement => {
	return (
		<ImageGridContainer>
			{images.map(({ src, price, name, ...rest }) => (
				<ImageGridItem key={src} {...rest}>
					<ImageDetail>
						<div>
							<ImageName>{name}</ImageName>
							<ImagePrice fontWeight="fontWeightLight">
								{formatMoney(price)}
							</ImagePrice>
							<ImageActions>
								<MenuIconButton 
									color="inherit"
									arial-label="cart"
									spacing={0}>
									<ShoppingCartIcon />
								</MenuIconButton>
								<MenuIconButton
									color="inherit"
									arial-label="see"
									spacing={0}>
									<VisibilityIcon />
								</MenuIconButton>
							</ImageActions>
						</div>
					</ImageDetail>
					<GalleryImage src={src} />
				</ImageGridItem>
			))}
		</ImageGridContainer>
	)
}

export default ImageGridGallery
