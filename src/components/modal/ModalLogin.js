import { RiEyeLine, RiEyeOffLine } from 'react-icons/ri'
import { Checkbox, Input, Button, Divider } from 'antd'
import { RiGoogleFill, RiFacebookCircleFill } from 'react-icons/ri'
import { child, get, ref } from "firebase/database";
import { useRouter } from "next/router";
import React, { useContext, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { database } from "../../firebase";
import { Store } from "../../pages/_app";

const ModalLogin = ({ setAction }) => {
	const router = useRouter();

	const [account, setAccount] = useState();
	const { SignInUser } = useContext(Store);
	const onChange = (e) => {
		setAccount({ ...account, email: e.target.value })
	};

	const CheckLogin = () => {
		get(child(ref(database), `account`))
			.then((snapshot) => {
				if (snapshot.exists()) {
					const arrAccounts = Object.values(snapshot.val());
					console.log(arrAccounts, 'ar')
					const user = arrAccounts.find(
						(pro) =>
							pro.email == account?.email
							&&
							pro.password == account?.password
					);
					if (user) {
						SignInUser(user);
						toast.success("Đăng nhập thành công");
						setAction(false)
						router.push('/dashboard')
					} else {
						toast.error("Sai tài khoản hoặc mật khẩu");
					}
				}
			})
			.catch((error) => {
				console.error(error);
			});
	};
	// const [passwordVisible, setPasswordVisible] = useState(false);
	return (
		<>
			<p style={{ textAlign: 'center', fontWeight: 600, fontSize: '28px' }}>LOGIN</p>
			<Input placeholder="Nhập email hoặc số điện thoại" onChange={onChange} style={{
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
				onChange={(e) =>
					setAccount({ ...account, password: e.target.value })
				}
			/>
			<div style={{ display: 'flex', justifyContent: 'space-between' }}>
				<Checkbox onChange={onChange} style={{ marginBottom: '16px' }}>Remember me</Checkbox>
				<a href='/'>Forgot password ?</a>
			</div>
			<Button onClick={CheckLogin} style={{ background: 'linear-gradient(270deg,#8f73f0 0%,#5095ff 100%)', color: '#fff', width: '100%', height: '48px' }}>LOGIN</Button>
			<Divider style={{ color: 'grey' }}>Or</Divider>
			<div style={{ display: 'flex', justifyContent: 'center', marginBottom: '24px' }}>
				<RiFacebookCircleFill size={40} color={'#5095ff'} style={{ marginRight: '24px' }} />
				<RiGoogleFill size={40} color={'red'} />
			</div>
		</>
	)
}
export default ModalLogin