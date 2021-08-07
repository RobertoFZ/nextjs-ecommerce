import styled from 'styled-components'
import COLORS from 'shared/constants/colors'
import { Typography } from '@material-ui/core'

const { PRIMARY_COLOR } = COLORS

const HeroTitle = styled(Typography)`
	color: ${PRIMARY_COLOR};
	margin: 0;
	text-align: center;
`

export default HeroTitle
