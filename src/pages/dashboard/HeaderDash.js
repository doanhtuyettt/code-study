import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import OptionMenu from './OptionMenu'
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { RiPantoneFill } from 'react-icons/ri'

const pages = ['Products', 'Pricing', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function HeaderDash() {
	const [anchorElNav, setAnchorElNav] = React.useState(null);
	const [anchorElUser, setAnchorElUser] = React.useState(null);

	const handleOpenNavMenu = (event) => {
		setAnchorElNav(event.currentTarget);
	};
	const handleOpenUserMenu = (event) => {
		setAnchorElUser(event.currentTarget);
	};

	const handleCloseNavMenu = () => {
		setAnchorElNav(null);
	};

	const handleCloseUserMenu = () => {
		setAnchorElUser(null);
	};
	const avatarStyle = { backgroundColor: '#fb9e3f', width: 50, height: 50 }
	return (
		<AppBar position="static" sx={{ background: '#5419dd' }}>
			<Container maxWidth="xl" sx={{ m:0, display: 'flex', justifyContent: 'space-between' }}>
				<Toolbar disableGutters>
					<RiPantoneFill color={'white'} size={30} />
					<Typography
						variant="h6"
						noWrap
						component="a"
						href="/"
						sx={{
							mx: 2,
							display: { xs: 'none', md: 'flex' },
							fontFamily: 'monospace',
							fontWeight: 700,
							letterSpacing: '.3rem',
							color: 'inherit',
							textDecoration: 'none',
						}}
					>
						CODE STUDY
					</Typography>
				</Toolbar>
				<Toolbar>
					<Typography sx={{ mr: 2 }}>Tuyết Đỗ</Typography>

					<Tooltip title="Open settings">
						<Avatar style={avatarStyle}>
						</Avatar>
					</Tooltip>
					<Menu
						sx={{ mt: '45px' }}
						id="menu-appbar"
						anchorEl={anchorElUser}
						anchorOrigin={{
							vertical: 'top',
							horizontal: 'right',
						}}
						keepMounted
						transformOrigin={{
							vertical: 'top',
							horizontal: 'right',
						}}
						open={Boolean(anchorElUser)}
						onClose={handleCloseUserMenu}
					>
						{settings.map((setting) => (
							<MenuItem key={setting} onClick={handleCloseUserMenu}>
								<Typography textAlign="center">{setting}</Typography>
							</MenuItem>
						))}
					</Menu>

					<OptionMenu />
				</Toolbar>
			</Container>
		</AppBar>
	);
}
export default HeaderDash;