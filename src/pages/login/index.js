import React, { useState } from 'react'
import { InputAdornment, IconButton, OutlinedInput, Grid, FormControl, InputLabel, Paper, Box, Avatar, TextField, Button, Typography, Link, FormControlLabel, Checkbox } from '@mui/material'
import { RiSkypeLine, RiGoogleFill, RiFacebookCircleLine, RiEyeOffLine, RiEyeLine } from 'react-icons/ri'

const Login = () => {
	const paperStyle = { flex: 'left', padding: 20, minHeight: '80vh', width: 400, margin: "20px auto", borderRadius: '20px' }
	const avatarStyle = { backgroundColor: '#5419dd', width: 50, height: 50 }
	const [showPassword, setShowPassword] = useState(false);

	const handleClickShowPassword = () => setShowPassword((show) => !show);

	const handleMouseDownPassword = (event) => {
		event.preventDefault();
	};

	return (
		<Grid sx={{
			backgroundImage: 'url(https://codelearn.io/Themes/TheCodeCampPro/Resources/Images/landing-v2/head-right-bg.png)',
			backgroundRepeat: 'no-repeat',
			backgroundPosition: 'right center',
			backgroundAttachment: 'fixed',

			backgroundSize: 'cover',
		}}
		>
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
	)
}

export default Login