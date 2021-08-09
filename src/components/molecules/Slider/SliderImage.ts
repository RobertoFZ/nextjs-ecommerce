import styled from 'styled-components'

interface ISliderImage {
	active: boolean
	background: string
}

const SliderImage = styled.div`
	${({ active }: ISliderImage) => `	height: ${active ? '100%' : '0px'};`}
	${({ background }: ISliderImage) =>
		`background-image: url(${background});`}
	background-size: cover;
	background-repeat: no-repeat;
	background-position: center;
	transition: all ease-in-out 0.4s;
`

export default SliderImage
