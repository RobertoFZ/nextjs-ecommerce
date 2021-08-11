import { Container, Grid, Typography } from '@material-ui/core'
import AppButton from 'components/atoms/AppButton'
import TextAlign, { EAlign } from 'components/atoms/TextAlign'
import React, { ReactElement } from 'react'
import CustomContainer from './shared/CustomContainer'
import FullHeightImage from './shared/FullHeightImage'
import Paragraph from './shared/Paragraph'

const Featured = (): ReactElement => (
	<Container>
		<Grid container alignContent="center" alignItems="center">
			<Grid item xs={12} lg={6}>
				<FullHeightImage src="/images/featured.png" />
			</Grid>
			<Grid item xs={12} lg={6}>
				<Typography variant="h4" component="h2" align="center">
					The New Handmade Products
				</Typography>
				<CustomContainer>
					<Paragraph align="left">
						Lorem ipsum dolor sit amet, consectetur adipiscing 
						elit. 
						In id purus molestie, aliquet neque non, gravida purus. 
						Morbi ac mi sed sapien sollicitudin congue.
					</Paragraph>
					<br />
					<Paragraph align="left">
						Integer fringilla, risus ut mattis viverra, purus erat
						congue odio, quis molestie turpis quam in turpis.
					</Paragraph>
					<TextAlign align={EAlign.LEFT}>
						<AppButton href="#contained-buttons">
							Shop now
						</AppButton>
					</TextAlign>
				</CustomContainer>
			</Grid>
		</Grid>
	</Container>
)

export default Featured
