import { Layout, Menu, Progress, } from 'antd';
import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react';
import IconUser from './Icons/IconUser'
import IconCashBook from './Icons/IconCashBook';
import { styled } from '@mui/material';
import { FundProjectionScreenOutlined, HomeOutlined, HourglassOutlined, PlusOutlined, AndroidOutlined } from '@ant-design/icons';
import { Box } from '@mui/material'

const { Sider } = Layout;
const SubMenu = Menu.SubMenu;
export default function SidebarComponent() {
	const router = useRouter();
	const [currentKey, setCurrentKey] = useState('/');
	const [, setOpenKeys] = useState(null);
	const menus = [
		{
			label: 'Users',
			key: 'USER',

		},
		{
			label: 'Courses',
			key: 'COURSE',
			children: [
				{
					label: 'Lessons',
					key: 'LESSON',
				},
				{
					label: 'Excercises',
					key: 'EXCERCISE',
				}
			]
		},

	]
	const [colap, setColap] = useState(false)
	const onCollapse = () => {
		setColap(!colap);
	};
	const StyleLayer = styled(Box)(() => ({
		position: 'relative',
		background: 'white',
		'& .ant-layout-sider': {
			background: 'white',
			height: '100%',
			'& .ant-layout-sider-trigger': {
				position: 'absolute'
			}
		}
	}))
	const onOpenChange = (keys) => {
		localStorage.setItem('submenu', JSON.stringify(keys));
	};

	useEffect(() => {
		if (router.pathname) {
			setCurrentKey(router.pathname);
		}
		setOpenKeys(localStorage.getItem('submenu'));
	}, []);

	const getIcon = (key) => {
		if (!key) return null;
		const iconsByName = [
			{ key: 'COURSE', icon: <IconUser active={checkActive({ key: '/code' })} /> },
			{ key: 'USER', icon: <IconCashBook active={checkActive({ keys: ['/customers', '/customers/groups'] })} /> },

		];
		return iconsByName.find((item) => item.key === key)?.icon;
	};

	const checkActive = ({ key = '', keys = [] }) => {
		if (key) {
			return key === currentKey ? 'true' : null;
		} else {
			return null;
		}
	};
	return (

		<StyleLayer>
			<Sider
				collapsible
				collapsed={colap}
				onCollapse={onCollapse}
			>
				<div className="logo" />
				<Menu theme="light" defaultSelectedKeys={['1']} mode="inline">
					<Menu.Item key="1" onClick={() => router.push('/user')}>
						<HomeOutlined />
						<span>Users</span>
					</Menu.Item>
					<SubMenu
						key="sub2"
						title={
							<span onClick={()=> router.push('/courses')}>
								<HourglassOutlined />
								<span>Coures</span>
							</span>
						}
					>
						<Menu.Item key="6" onClick={()=>router.push('/leson')}>Lessons</Menu.Item>
						<Menu.Item key="8">Excercise</Menu.Item>
					</SubMenu>

				</Menu>
			</Sider>
		</StyleLayer>
	);
}
