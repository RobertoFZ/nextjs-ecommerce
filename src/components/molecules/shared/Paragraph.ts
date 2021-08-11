import { Box } from '@material-ui/core'
import colors from 'shared/constants/colors'
import styled from 'styled-components'

interface IParagraph {
	align?: string
	padding?: string
}

const Paragraph = styled(Box)`
	${({ align = 'center' }: IParagraph) => `text-align: ${align};`}
	${({ padding = '0' }: IParagraph) => `padding: ${padding};`}

  color: ${colors.TEXT_BLACK};
	font-weight: 300;
	font-size: 16px;
	font-family: 'Roboto';
	line-height: 2;
`

export default Paragraph
