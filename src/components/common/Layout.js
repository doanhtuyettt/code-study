import { LaptopOutlined, HighlightOutlined, BookOutlined, UserOutlined } from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import React from 'react';
import Table from './Table'
import { RiUser3Line, RiPantoneFill } from 'react-icons/ri'
import { Button, Typography, Box } from '@mui/material';

const { Header, Content, Sider } = Layout;

const items2 = [
	{
		name: 'Users',
		icon: UserOutlined,
		children: []
	}, {
		name: 'Courses',
		icon: LaptopOutlined,
		children: ['Lessons','Excercises']
	}

].map((item, index) => {
	return {
		key: index,
		icon: React.createElement(item?.icon),
		label: item?.name,
		children: item?.children.map((obj, j) => {
			const subKey = index * 4 + j + 1;
			return {
				key: subKey,
				label: obj,
			};
		}),
	};
});
const LayoutComponent = () => {

	return (
		<Layout>
			<Header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
				<Box sx={{ display: 'flex', alignItems: 'center' }}>
					<RiPantoneFill color={'rgb(84, 25, 221)'} size={30} />
					<Typography color={'white'} sx={{ fontWeight: 800, ml: 2 }}>CODE STUDY</Typography>
				</Box>

				<div style={{ display: 'flex', alignItems: 'center' }}>
					<Typography color={'white'} sx={{ mr: 2, fontSize: 16 }}>Đỗ Ánh Tuyết</Typography>
					<RiUser3Line color={'white'} size={20} />
					<Button variant='contained' style={{ color: 'white', marginLeft: '10px', backgroundColor: '#5419dd' }} >Log out</Button>
				</div>
			</Header>
			<Layout>
				<Sider
					width={300}
				>
					<Menu
						mode="inline"
						defaultSelectedKeys={['0']}
						style={{
							height: '100%',
							borderRight: 0,
							fontWeight:500,
							fontSize:15,
							
						}}
						items={items2}
					/>
				</Sider>
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
						<Table />
					</Content>
				</Layout>
			</Layout>
		</Layout>
	);
};
export default LayoutComponent;