import styled from 'styled-components'
import COLORS from 'shared/constants/colors'
import { Typography } from '@material-ui/core'
import devices from 'shared/utils/devices'

const { BLACK } = COLORS

const HeroTitle = styled(Typography)`
	color: ${BLACK};
	margin: 0;
	text-align: center;
	font-size: 72px !important;

	@media ${devices.laptop} {
		text-align: left;
	}
`

export default HeroTitle
