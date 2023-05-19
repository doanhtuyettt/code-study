import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useState } from 'react'
import { RiEyeLine, RiEyeOffLine } from 'react-icons/ri'
import { Checkbox, Input, Button, Divider } from 'antd'
import { RiGoogleFill, RiFacebookCircleFill } from 'react-icons/ri'

const ModalLogin = () => {


	const onChange = (e) => {
		console.log(`checked = ${e.target.checked}`);
	};

	// const [passwordVisible, setPasswordVisible] = useState(false);
	return (
		<>
			<p style={{ textAlign: 'center', fontWeight: 600, fontSize: '28px' }}>LOGIN</p>
			<Input placeholder="Nhập email hoặc số điện thoại" style={{
				height: '40px',
				marginBottom: '16px'
			}} />
			<Input.Password
				placeholder="Nhập mật khẩu"
				iconRender={(visible) => (visible ? <RiEyeLine /> : <RiEyeOffLine />)}
				style={{
					height: '40px',
					marginBottom: '16px'
				}}
			/>
			<div style={{ display: 'flex', justifyContent: 'space-between' }}>
				<Checkbox onChange={onChange} style={{ marginBottom: '16px' }}>Remember me</Checkbox>
				<a href='/'>Forgot password ?</a>
			</div>
			<Button style={{ background: 'linear-gradient(270deg,#8f73f0 0%,#5095ff 100%)', color: '#fff', width: '100%', height: '48px' }}>LOGIN</Button>
			<Divider style={{ color: 'grey' }}>Or</Divider>
			<div style={{ display: 'flex', justifyContent: 'center', marginBottom: '24px' }}>
				<RiFacebookCircleFill size={40} color={'#5095ff'} style={{ marginRight: '24px' }} />
				<RiGoogleFill size={40} color={'red'} />
			</div>
		</>
	)
}
export default ModalLogin