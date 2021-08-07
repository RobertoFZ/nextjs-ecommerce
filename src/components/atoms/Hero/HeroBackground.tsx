import styled from 'styled-components'
import COLORS from 'shared/constants/colors'

const { BLACK } = COLORS

const HeroBackground = styled.div`
	align-items: center;
	background-color: ${BLACK};
	display: flex;
	justify-content: center;
	min-height: 100vh;
`

export default HeroBackground
