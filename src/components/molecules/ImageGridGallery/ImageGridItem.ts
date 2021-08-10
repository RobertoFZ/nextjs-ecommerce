import { ImageGridElement } from 'shared/interfaces/ImageGrid'
import devices from 'shared/utils/devices'
import styled from 'styled-components'

const ImageGridItem = styled.div`
	border-color: #dbdbdb;
	${({ columnSm }: ImageGridElement) => `grid-column: ${columnSm}`};
	${({ rowSm }: ImageGridElement) => `grid-row: ${rowSm}`};

	@media ${devices.tablet} {
		${({ columnMd }: ImageGridElement) => `grid-column: ${columnMd}`};
		${({ rowMd }: ImageGridElement) => `grid-row: ${rowMd}`};
	}

	@media ${devices.laptop} {
		${({ columnLg }: ImageGridElement) => `grid-column: ${columnLg}`};
		${({ rowLg }: ImageGridElement) => `grid-row: ${rowLg}`};
	}
`

export default ImageGridItem
