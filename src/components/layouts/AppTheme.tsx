import React, { ReactElement } from 'react'
import { ThemeProvider } from 'styled-components'
import {
	createTheme,
	ThemeProvider as MuiThemeProvider,
} from '@material-ui/core/styles'
import theme from 'shared/constants/theme'

const customTheme = createTheme({
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
