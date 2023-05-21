import { LaptopOutlined, UserOutlined } from '@ant-design/icons';
import { Layout } from 'antd';
import React, { useState } from 'react';
import { RiUser3Line, RiPantoneFill } from 'react-icons/ri'
import { Button, Typography, Box } from '@mui/material';
import SiderComponent from './SiderComponent';
import Table from './Table'
import Menu from './Menu'

const { Header, Content } = Layout;


const LayoutComponent = ({chidren}) => {
	const style = {
    fontSize: "30px",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  };

//   const components = {
//     1: <Table />,
// 		2: <TableCoures/>
//   };

  const [render, updateRender] = useState(1);

  const handleMenuClick = menu => {
    updateRender(menu.key);
  };
	return (
		<Layout>
			{/* <Header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
				<Box sx={{ display: 'flex', alignItems: 'center' }}>
					<RiPantoneFill color={'rgb(84, 25, 221)'} size={30} />
					<Typography color={'white'} sx={{ fontWeight: 800, ml: 2 }}>CODE STUDY</Typography>
				</Box>

				<div style={{ display: 'flex', alignItems: 'center' }}>
					<Typography color={'white'} sx={{ mr: 2, fontSize: 16 }}>Đỗ Ánh Tuyết</Typography>
					<RiUser3Line color={'white'} size={20} />
					<Button variant='contained' style={{ color: 'white', marginLeft: '10px', backgroundColor: '#5419dd' }} >Log out</Button>
				</div>
			</Header> */}
			<Layout  style={{ minHeight: "100vh" }}>
				{/* <SiderComponent handleClick={handleMenuClick} /> */}
				<Menu />
				<Layout
					style={{
						padding: '0 24px 24px',
					}}
				>
					<Content
						style={{
							margin: 0,
							minHeight: 280,
							background: 'white',
							borderRadius: '6px'
						}}
					>
						{chidren}
					</Content>
				</Layout>
			</Layout>
		</Layout>
	);
};
export default LayoutComponent;