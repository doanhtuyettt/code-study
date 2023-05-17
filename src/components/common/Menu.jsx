import { Layout, Menu, Progress, Popover } from 'antd';
import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react';
import IconUser from './Icons/IconUser'
import IconCashBook from './Icons/IconCashBook';

const { Sider } = Layout;

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
		<Sider className="sidebar" width={240} style={{ backgroundColor: '#fff' }}>
			<Menu
				mode="inline"
				style={{
					color: '#33343E',
					fontWeight: 500,
					backgroundColor: '#fff',
					borderRight: 'none',
				}}
				forceSubMenuRender={true}
				items={menus.map((item => ({ ...item, icon: getIcon(item.key) })))}
				onClick={({ key }) => {
					router.push(key.toLowerCase());
				}}
				onSelect={({ key }) => {
					if (key === '/pos') {
						window.open(`${window.location.origin}/pos`, '_blank');
					} else {
						setCurrentKey(key);
					}
				}}
				defaultSelectedKeys={[router.pathname]}
				onOpenChange={onOpenChange}
				theme="light"
			/>
		</Sider>
	);
}
