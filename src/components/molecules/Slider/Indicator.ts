import styled from 'styled-components'

interface IIndicator{
	active?: boolean
}

const Indicator = styled.span`
  display: block;
	height: 20px;
  margin-bottom: 20px;
  left: -10px;
  position: relative;
  width: 80px;

  &:hover {
    cursor: pointer;
  }

	&::before {
		content: '';
		${({ active }: IIndicator) => `display: ${active ? 'block': 'none'};`}
		position: absolute;
		background-color: #222222;
		width: 40px;
		height: 1px;
		right: 10px;
    top: 50%;
	}

	&::after {
		color: #222222;
    font-family: "Roboto", "Helvetica", "Arial", sans-serif;
		left: 0;
    right: 0;
		position: absolute;
		display: block;
		content: attr(data-slide);
		font-size: 12px;
		line-height: 1em;
		font-weight: 800;
    top: 30%;
		${({ active }: IIndicator) => `opacity: ${active ? 1: 0.2};`}
	}
`

export default Indicator
