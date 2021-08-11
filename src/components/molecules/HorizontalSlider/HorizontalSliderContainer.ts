import styled from 'styled-components'

const HorizontalSliderContainer = styled.div`
	display: inline-flex;
	${({ maxWidth }) => `max-width: ${maxWidth}px`};
	overflow-x: scroll;
`

export default HorizontalSliderContainer
