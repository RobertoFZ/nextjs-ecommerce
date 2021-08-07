import styled from 'styled-components'
import { AppBar as MuAppBar } from '@material-ui/core'

const AppBar = styled(MuAppBar)`
	${({ theme }) => `padding: ${theme.spacing(2)}px !important;`}
  background-color: #ffffff;
`

export default AppBar
