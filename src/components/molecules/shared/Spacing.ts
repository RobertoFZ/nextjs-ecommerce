import { Theme } from '@material-ui/core'
import styled from 'styled-components'

interface ISpacing {
	theme: Theme
	spacing?: number
}

const Spacing = styled.div`
	${({ theme, spacing = 2 }: ISpacing) =>
		`margin: ${theme.spacing(spacing)}px !important;`}
`

export default Spacing
