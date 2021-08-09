import React from 'react'
import { ISlideElement } from 'shared/interfaces/Slider'
import Indicator from './Indicator'
import IndicatorsContainer from './IndicatorsContainer'

interface IIndicators {
	slides: ISlideElement[]
	onSlideChange: (index: number) => void
}

const Indicators = ({ slides, onSlideChange }: IIndicators) => (
	<IndicatorsContainer>
		{slides.map((_, index) => {
			const setCurrentSlide = () => onSlideChange(index)
			return (
				<Indicator
					key={_.src}
					role="button"
					data-slide={`0${index + 1}`}
					onClick={setCurrentSlide}
				/>
			)
		})}
	</IndicatorsContainer>
)

export default Indicators
