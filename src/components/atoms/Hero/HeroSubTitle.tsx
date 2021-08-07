import styled from 'styled-components'
import COLORS from 'shared/constants/colors'
import { Typography } from '@material-ui/core'
import devices from 'shared/utils/devices'

const { GRAY } = COLORS

const HeroSubTitle = styled(Typography)`
	color: ${GRAY};
	margin: 0 0 20px 0 !important;
	text-align: left;
	font-weight: 300 !important;
	text-align: center;

	@media ${devices.laptop} {
		text-align: left;
	}
`

export default HeroSubTitle
