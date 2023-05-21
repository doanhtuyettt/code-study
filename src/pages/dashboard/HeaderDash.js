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
import { styled } from "@mui/material/styles";
import ModalLogin from '@/components/modal/ModalLogin';
import { Modal, Button } from 'antd'
import { useRouter } from 'next/router';
import { useState } from 'react';

const pages = ['Products', 'Pricing', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function HeaderDash({ user, SignInUser }) {
	const [anchorElUser, setAnchorElUser] = React.useState(null);
	const [isModalOpen, setIsModalOpen] = useState(false);

	const showModal = () => {
		setIsModalOpen(true);
	};

	const handleCloseUserMenu = () => {
		setAnchorElUser(null);
	};
	const ContainerStyle = styled(Modal)(({
	}) => ({
		'& .ant-modal-footer': {
			display: 'none'
		},
		'& .ant-modal-header': {
			display: 'none'
		},
		'& .ant-modal-close-x': {
			display: 'none'
		}


	}));
	const avatarStyle = { backgroundColor: '#fb9e3f', width: 50, height: 50, marginRight: '20px' }
	const router = useRouter();

	return (
		<AppBar position="static" sx={{ background: '#5419dd' }}>
			<Container maxWidth="xl" sx={{ m: 0, display: 'flex', justifyContent: 'space-between' }}>
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
					<Typography sx={{ mr: 2 }}>{user ? user.name : ''}</Typography>

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

					{!user ? <Button style={{ background: '#e8505b', padding: '8px 20px', color: '#fff', fontWeight: 600,border: '1px solid transparent', height:'100%'}} onClick={showModal}>LOGIN</Button> : <OptionMenu {...{ user, SignInUser }} />}
				</Toolbar>


				<ContainerStyle title="" open={isModalOpen}>

					<ModalLogin setAction={setIsModalOpen} />
				</ContainerStyle>
			</Container>
		</AppBar>
	);
}
export default HeaderDash;