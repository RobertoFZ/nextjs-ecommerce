import React, { ReactElement, useState } from 'react'
import { ISlideElement } from 'shared/interfaces/Slider'
import Indicators from './Indicators'
import SliderContainer from './SliderContainer'
import SliderImage from './SliderImage'

interface ISlider {
	slides: ISlideElement[]
}

const Slider = ({ slides }: ISlider): ReactElement => {
	const [currentSlide, setCurrentSlide] = useState(0)
	const onSlideChange = (index: number) => {
		if (index < slides.length) {
			setCurrentSlide(index)
		} else {
			setCurrentSlide(0)
		}
	}

	return (
		<SliderContainer>
			{slides.map((slider, index) => (
				<SliderImage
					key={slider.src}
					active={index === currentSlide}
					background={slider.src}
				/>
			))}
			<Indicators
				currentSlide={currentSlide}
				slides={slides}
				onSlideChange={onSlideChange}
			/>
		</SliderContainer>
	)
}

export default Slider
