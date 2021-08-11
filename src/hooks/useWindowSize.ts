import { useEffect, useState } from 'react'
import { ToBeDefined } from 'shared/interfaces/ToBeDefined'

declare global {
	interface Window {
		__INITIAL_DATA__: ToBeDefined
	}
}

const useWindowSize = (): { height: number; width: number } => {
	const [{ width, height }, setDimentions] = useState({
		width: 0,
		height: 0,
	})

	const handleResize = (): void =>
		setDimentions({
			height: window.innerHeight,
			width: window.innerWidth,
		})

	useEffect(() => {
		handleResize()
		window.addEventListener('resize', handleResize)
		return () => {
			window.removeEventListener('resize', handleResize)
		}
	}, [])

	return {
		height,
		width,
	}
}

export default useWindowSize
