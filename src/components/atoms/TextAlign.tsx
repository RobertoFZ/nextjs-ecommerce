import devices from 'shared/utils/devices'
import styled from 'styled-components'

export enum EAlign {
	CENTER = 'center',
	LEFT = 'left',
	RIGHT = 'right',
}

export type TextAlignProps = {
	align?: EAlign
	lg?: EAlign
	sm?: EAlign
}

const TextAlign = styled.div`
	text-align: ${({ align, sm }: TextAlignProps) =>
		sm ?? align ?? 'center'};
	width: 100%;

	@media ${devices.laptop} {
		text-align: ${({ align, lg }: TextAlignProps) =>
			lg ?? align ?? 'center'};
	}
`

export default TextAlign
