import { IconButton, Theme } from '@material-ui/core'
import styled from 'styled-components'

interface IMenuIconButton {
	theme: Theme
	spacing?: number
}
const MenuIconButton = styled(IconButton)`
	${({ theme, spacing = 2 }: IMenuIconButton) =>
		`margin-right: ${theme.spacing(spacing)}px !important;`}
`

export default MenuIconButton
