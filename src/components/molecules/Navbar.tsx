import React, { ReactElement } from 'react'
import { Toolbar, Button } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import SearchIcon from '@material-ui/icons/Search'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import MenuIconButton from 'components/atoms/Navbar/MenuIconButton'
import NavbarContainer from 'components/atoms/Navbar/NavbarContainer'
import LogoContainer from 'components/atoms/Navbar/LogoContainer'
import Logo from 'components/atoms/Navbar/Logo'
import AppBar from 'components/atoms/Navbar/AppBar'
import AppItem from 'components/atoms/Navbar/AppItem'
import TextAlign from 'components/atoms/TextAlign'
import ElevationScroll from './shared/ElevationScroll'

const Navbar: React.FC = ({ ...props }): ReactElement => {
	return (
		<ElevationScroll {...props}>
			<NavbarContainer>
				<AppBar position="fixed">
					<Toolbar style={{ flex: '1 1 0' }}>
						<AppItem>
							<MenuIconButton
								edge="start"
								color="inherit"
								aria-label="search"
								spacing={0}
							>
								<SearchIcon />
							</MenuIconButton>
							<MenuIconButton
								edge="start"
								color="inherit"
								aria-label="menu"
							>
								<MenuIcon />
							</MenuIconButton>
						</AppItem>
						<LogoContainer>
							<Logo src="/apple-icon.png" />
						</LogoContainer>
						<AppItem>
							<TextAlign align="right">
								<Button color="inherit">Iniciar sesión</Button>
								<MenuIconButton 
									color="inherit"
									arial-label="cart"
								>
									<ShoppingCartIcon />
								</MenuIconButton>
							</TextAlign>
						</AppItem>
					</Toolbar>
				</AppBar>
			</NavbarContainer>
		</ElevationScroll>
	)
}

export default Navbar
