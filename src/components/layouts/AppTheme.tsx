import React, { ReactElement } from 'react'
import { ThemeProvider } from 'styled-components'
import {
	createMuiTheme,
	ThemeProvider as MuiThemeProvider,
} from '@material-ui/core/styles'
import { NoSsr } from '@material-ui/core'
import theme from 'shared/constants/theme'

const customTheme = createMuiTheme({
	palette: {
		...theme,
	},
})

const AppTheme: React.FC = ({ children }): ReactElement => (
	<MuiThemeProvider theme={customTheme}>
		<ThemeProvider theme={customTheme}>{children}</ThemeProvider>
	</MuiThemeProvider>
)

export default AppTheme
