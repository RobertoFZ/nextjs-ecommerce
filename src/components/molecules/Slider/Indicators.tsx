import React, { ReactElement } from 'react'
import { ISlideElement } from 'shared/interfaces/Slider'
import Indicator from './Indicator'
import IndicatorsContainer from './IndicatorsContainer'

interface IIndicators {
	slides: ISlideElement[]
	onSlideChange: (index: number) => void
	currentSlide: number
}

const Indicators = ({
	currentSlide,
	slides,
	onSlideChange,
}: IIndicators): ReactElement => (
	<IndicatorsContainer>
		{slides.map((_, index) => {
			const setCurrentSlide = () => onSlideChange(index)
			return (
				<Indicator
					key={_.src}
					role="button"
					data-slide={`0${index + 1}`}
					onClick={setCurrentSlide}
					active={currentSlide === index}
				/>
			)
		})}
	</IndicatorsContainer>
)

export default Indicators
