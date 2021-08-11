import styled from 'styled-components'

const HorizontalSliderItem = styled.div`
	${({ width }) => `width: ${width}px`};
	display: inline-table;
	border-color: #dbdbdb;
	position: relative;
	margin: 0 5px;

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
`

export default HorizontalSliderItem
