import React, { ReactElement } from 'react'
import { useScrollTrigger } from '@material-ui/core'

interface Props {
	/**
	 * Injected by the documentation to work in an iframe.
	 * You won't need it on your project.
	 */
	window?: () => Window
	children: React.ReactElement
}

function ElevationScroll(props: Props): ReactElement {
	const { children, window } = props
	const trigger = useScrollTrigger({
		disableHysteresis: true,
		threshold: 0,
		target: window ? window() : undefined,
	})

	return React.cloneElement(children, {
		elevation: trigger ? 4 : 0,
	})
}

export default ElevationScroll
