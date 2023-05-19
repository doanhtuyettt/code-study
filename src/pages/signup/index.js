import React, { useState } from 'react'
import { InputAdornment, IconButton, OutlinedInput, Grid, FormControl, InputLabel, Paper, Box, Avatar, TextField, Button, Typography, Link, FormControlLabel, Checkbox } from '@mui/material'
import { RiSkypeLine, RiGoogleFill, RiFacebookCircleLine, RiEyeOffLine, RiEyeLine } from 'react-icons/ri'
import { Layout, Menu, Modal } from 'antd';
import { RiPantoneFill } from 'react-icons/ri'
import ModalLogin from '@/components/modal/ModalLogin';
import { styled } from "@mui/material/styles";

const { Header } = Layout
const Login = () => {
	const paperStyle = { position: 'relative', padding: 20, minHeight: '80vh', width: 400, margin: "20px auto", borderRadius: '20px', boxShadow: '0px 0px 20px rgba(29, 32, 188, 0.2)!important' }
	const avatarStyle = { backgroundColor: '#5419dd', width: 50, height: 50 }
	const [showPassword, setShowPassword] = useState(false);
	const headStyle = {
		content: '',
		width: '35vw',
		height: '35vw',
		background: 'url(https://codelearn.io/Themes/TheCodeCampPro/Resources/Images/landing-v2/head-right-bg.png) top right/ cover no-repeat',
		position: 'absolute',
		top: '64px',
		right: 0,
	}
	const handleClickShowPassword = () => setShowPassword((show) => !show);

	const handleMouseDownPassword = (event) => {
		event.preventDefault();
	};
	const items1 = [
		{
			key: 1,
			label: 'Learning'
		}
		,
		{
			key: 2,
			label: 'Training'
		},
		{
			key: 3,
			label: 'Game'
		}
	]
	const [value, setValue] = useState()
	const handleChange = (key) => {
		setValue(key)
	}
	const [isModalOpen, setIsModalOpen] = useState(false);

	const showModal = () => {
		setIsModalOpen(true);
	};

	const handleOk = () => {
		setIsModalOpen(false);
	};

	const handleCancel = () => {
		setIsModalOpen(false);
	};

	const ContainerStyle = styled(Modal)(({
	}) => ({
		'& .ant-modal-footer':{
			display:'none'
		},
		'& .ant-modal-header':{
			display:'none'
		},
		'& .ant-modal-close-x':{
			display:'none'
		}
			
		
	}));

	return (

		<Layout style={{ background: '#fff' }}>
			<Header style={{ display: 'flex', alignItems: 'center', position: 'sticky', background: '#5419dd', width: '100%' }}>
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
						color: '#fff',
						textDecoration: 'none',
					}}
				>
					CODE STUDY
				</Typography>
				<Menu theme="dark" onChange={handleChange} mode="horizontal" defaultSelectedKeys={value} items={items1} style={{ width: '80%', background: '#5419dd', fontWeight: 600 }} />

				<Button style={{ background: '#e8505b', padding: '8px 20px', color: '#fff', fontWeight: 600, cursor: 'pointer' }} onClick={showModal}>LOGIN</Button>
	
				<ContainerStyle title="" open={isModalOpen}>
					
					<ModalLogin />
				</ContainerStyle>
			
			</Header>
			<img src='https://images.viblo.asia/8c7fd240-2385-4b65-b185-00f04e5cb3a3.png' style={{ transform: 'translate(-17%, 11%)' }} />
			<div style={headStyle}>
				<Grid>
					<Paper elevation={10} style={paperStyle}>
						<Grid align='center' my={2}>
							<Avatar style={avatarStyle}>
							</Avatar>
							<Typography style={{ fontWeight: 700, fontSize: 20 }}>Start now</Typography>
						</Grid>

						<TextField label='Username' placeholder='Enter username' fullWidth required sx={{ mb: 2.5 }} />
						<TextField label='Email' placeholder='Enter email' type='password' fullWidth required sx={{ mb: 2.5 }} />

						<FormControl sx={{ width: '100%' }} variant="outlined">
							<InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
							<OutlinedInput
								id="outlined-adornment-password"
								type={showPassword ? 'text' : 'password'}
								endAdornment={
									<InputAdornment position="end">
										<IconButton
											aria-label="toggle password visibility"
											onClick={handleClickShowPassword}
											onMouseDown={handleMouseDownPassword}
											edge="end"
										>
											{showPassword ? <RiEyeOffLine /> : <RiEyeLine />}
										</IconButton>
									</InputAdornment>
								}
								label="Password"
							/>
						</FormControl>
						<Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
							<FormControlLabel
								control={
									<Checkbox
										name="checkedB"
										color="primary"
									/>
								}
								label="I agree to CodeStudy"
							/>
							<Typography >
								<Link href="#" >
									Term of use
								</Link>
							</Typography>
						</Box>
						<Button variant='contained' fullWidth sx={{ bgcolor: '#5419dd!important', textTransform: 'none', fontSize: 18, mb: 2 }}>Start coding now !</Button>
						{/* <Typography >
				<Link href="#" >
					Forgot password ?
				</Link>
			</Typography> */}
						<Typography sx={{ textAlign: 'center', mb: 1 }}> or use another account
						</Typography>
						<Box sx={{ display: 'flex', justifyContent: 'center', gap: 3, mb: 2 }}>
							<RiFacebookCircleLine color={"#36589d5"} size={40} />
							<RiGoogleFill color={"#ea230f"} size={40} />
							<RiSkypeLine color={"#00a4f5"} size={40} />
						</Box>
						<Typography sx={{ textAlign: 'center' }}>
							<Link href="#" >
								Forgot password ?
							</Link>
						</Typography>
					</Paper>
				</Grid>
			</div>
		</Layout>


	)
}

export default Login