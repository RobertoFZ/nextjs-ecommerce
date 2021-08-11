import MenuIconButton from 'components/atoms/Navbar/MenuIconButton'
import React, { ReactElement, useState } from 'react'
import { IHorizontalSliderItem } from 'shared/interfaces/HorizontalSliderItem'
import HorizontalSliderActions from './HorizontalSliderActions'
import HorizontalSliderContainer from './HorizontalSliderContainer'
import HorizontalSliderItem from './HorizontalSliderItem'
import VisibilityIcon from '@material-ui/icons/Visibility'
import HorizontalSliderDetail from './HorizontalSliderDetail'
import HorizontalSliderImage from './HorizontalSliderImage'
import useWindowSize from 'hooks/useWindowSize'
import { useEffect } from 'react'
import breakpoints from 'shared/utils/breakpoints'
import HorizontalSliderName from './HorizontalSliderName'
import HorizontalSliderDate from './HorizontalSliderDate'

interface IHorizontalSlider {
	products: IHorizontalSliderItem[]
}

const HorizontalSlider = ({
	products,
}: IHorizontalSlider): ReactElement => {
	const [slideWidth, setSlideWidth] = useState(0)
	const { width, height } = useWindowSize()

	const calculateDimentions = (): void => {
		const { laptop } = breakpoints
		if (width >= laptop) {
			setSlideWidth(width / 4)
		}
	}

	useEffect(() => {
		calculateDimentions()
	}, [width, height])
	return (
		<HorizontalSliderContainer maxWidth={width}>
			{products.map(({ src, name, date }) => (
				<div>
					<HorizontalSliderItem width={slideWidth} key={src}>
						<HorizontalSliderDetail>
							<HorizontalSliderActions>
								<MenuIconButton
									color="inherit"
									arial-label="see"
									spacing={0}
								>
									<VisibilityIcon />
								</MenuIconButton>
							</HorizontalSliderActions>
						</HorizontalSliderDetail>
						<HorizontalSliderImage src={src} />
					</HorizontalSliderItem>
					<HorizontalSliderName>{name}</HorizontalSliderName>
					<HorizontalSliderDate>{date}</HorizontalSliderDate>
				</div>
			))}
		</HorizontalSliderContainer>
	)
}

export default HorizontalSlider
