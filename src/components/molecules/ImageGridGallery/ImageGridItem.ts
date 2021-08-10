import { ImageGridElement } from 'shared/interfaces/ImageGrid'
import devices from 'shared/utils/devices'
import styled from 'styled-components'

const ImageGridItem = styled.div`
	border-color: #dbdbdb;
	position: relative;
	${({ columnSm }: ImageGridElement) => `grid-column: ${columnSm}`};
	${({ rowSm }: ImageGridElement) => `grid-row: ${rowSm}`};

	> div:first-child {
		right: 25%;
		left: 25%;
		top: 50%;
		bottom: 50%;
		width: 50%;
		height: 0px;
		overflow: hidden;
		transition: all ease-in-out 0.4s;
	}

	&:hover {
		> div:first-child {
			right: 0;
			left: 0;
			top: 0;
			bottom: 0;
			width: 100%;
			height: 100%;
		}
	}

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
