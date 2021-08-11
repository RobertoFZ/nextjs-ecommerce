import devices from 'shared/utils/devices'
import styled from 'styled-components'

const CustomContainer = styled.div`
	margin: 20px;

	@media ${devices.laptop} {
		margin: 20px 100px;
	}
`

export default CustomContainer
