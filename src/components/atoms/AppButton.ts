import { Button, Theme } from '@material-ui/core'
import colors from 'shared/constants/colors'
import styled from 'styled-components'

interface IAppButton {
	theme: Theme
	backgroundColor?: string
}
const AppButton = styled(Button)`
	${({ backgroundColor = colors.LIGHT_GRAY }: IAppButton) =>
		`background: ${backgroundColor} !important;`}
	${({ backgroundColor = colors.LIGHT_GRAY }: IAppButton) =>
		`background-color: ${backgroundColor} !important;`}
	font-weight: bold !important;
	margin-top: 1.35rem !important;
	padding: 1.35rem 1.8rem !important;

	&::before {
		background-color: #222222;
		right: -10px;
		opacity: 0;
		position: absolute;
		content: '';
		width: 40px;
		height: 1px;
		display: block;
		top: calc(50% - 0.5px);
		transition: all 0.3s;
	}

	&::after {
		background-color: #222222;
		right: -30px;
		display: block;
		position: absolute;
		content: '';
		width: 40px;
		height: 1px;
		top: calc(50% - 0.5px);
		transition: all 0.3s;
	}

	&:hover {
		::before {
			right: -30px;
			display: block;
			opacity: 1;
		}
		::after {
			right: -40px;
			opacity: 0;
		}
	}
`

export default AppButton
