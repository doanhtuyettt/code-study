import React, { useState, useRef, useEffect, forwardRef, useImperativeHandle } from "react";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { useRouter } from "next/router";
import { RiSearch2Line, RiRefreshLine } from 'react-icons/ri';
import { Select } from "@/components/DesignSystem/form";
import InputTags, { TagsList } from "@/components/input-tags";
import CourseComponent from './CourseComponent'
import HeaderDash from "./HeaderDash";
import LeftNavigation from './LeftNavigation'
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import { FundProjectionScreenOutlined, HomeOutlined, HourglassOutlined, PlusOutlined  } from '@ant-design/icons';

const { Header, Content, Sider } = Layout;

const SearchForm = forwardRef(({
	variant = '',
	filterForm,
	...props
}, ref) => {
	const { palette } = useTheme();
	const router = useRouter();

	const jobCats = []
	const provinces = []
	const selectStyle = {
		marginRight: '12px', color: 'white', '& .MuiOutlinedInput-notchedOutline': {
			borderColor: 'white'
		},
		'& .MuiSvgIcon-root': {
			color: 'white'
		}
	}
	const items2 = [
		{
			name: 'Users',
			icon: HomeOutlined,
			children: []
		}, {
			name: 'Courses',
			icon: HourglassOutlined,
		},
		{
			name: 'Users',
			icon: FundProjectionScreenOutlined,
			children: []
		}, {
			name: 'Courses',
			icon: PlusOutlined ,
		}

	].map((item, index) => {
		return {
			key: index,
			icon: React.createElement(item?.icon),
			// label: item?.name,
		};
	});
	return (
		<>
			<HeaderDash />
			<Layout>
				<Sider width={96} >
					<Menu
						mode="inline"
						defaultSelectedKeys={['1']}
						defaultOpenKeys={['sub1']}
						style={{ height: '100%', borderRight: 0 }}
						items={items2}
					/>
				</Sider>
				<Layout style={{ padding: '0 24px 24px',minHeight:'100vh' }}>
					<Box sx={{
						backgroundImage: 'url(https://files.fullstack.edu.vn/f8-prod/banners/20/6308a6bf603a4.png)',
						backgroundRepeat: 'no-repeat',
						backgroundPosition: 'right center',
						backgroundColor: 'rgb(118, 18, 255)',
						height: '400px',
						borderRadius: '16px',
						m: 5,
						boxShadow: ' 5px 10px 18px #888888',
						mb: '500px'
						// backgroundSize: 'cover',
					}}>
						<Box sx={{ p: 8 }}>
							<Typography sx={{ fontSize: 30, fontWeight: 600, color: 'white', mb: 2 }}>Khóa học dễ, code thật dễ !</Typography>
							<Box className="search-form" sx={{
								background: 'rgba(18, 29, 37, 0.5)',
								borderRadius: '8px',
								backdropFilter: 'blur(2px)',
								p: 5
							}}>
								<Box mr={'12px'} mb={3} className="search-box" >
									<InputTags
										iconStart={<RiSearch2Line size={20} color="#5C6A82" />}
										placeholder="Tìm kiếm khoá học phù hợp..."
									/>
								</Box>

								<Box display="flex" className="search-select-box">
									<Select
										// value={'aaa'}
										// onChange={e => onChangeValue(e, 'JobCategoryIds')}
										multiple
										placeholder="Kỹ năng lập trình"
										searchPlaceholder="Tìm kiếm ngành nghề"
										options={jobCats.map(item => ({ value: item.id, label: item.name }))}
										sx={selectStyle}
										height={48}
									/>

									<Select
										// value={'Cổ Nhuế'}
										// onChange={e => onChangeValue(e, 'ProvinceIds')}
										multiple
										placeholder="Tư duy thuật toán"
										searchPlaceholder="Tìm kiếm khu vực"
										options={provinces.map(item => ({ value: item.id, label: item.name }))}
										sx={selectStyle}
										height={44}
									/>

									<IconButton
										sx={{ width: 48, marginLeft: '12px' }}
										className="hover-active"
									>
										<RiRefreshLine size={21} color={'white'} />
									</IconButton>
								</Box>
							</Box>


							<TagsList
								tagProps={{

									icon: <RiSearch2Line color="#fff" size={16} />,
									sx: {
										background: 'rgba(18, 29, 37, 0.5)',
										color: '#fff',
										'&:hover': {
											background: 'rgba(18, 29, 37, 0.3)!important',
										},
										'.MuiChip-label': {
											maxWidth: 215,
										},
									},
								}}
								sx={{ marginTop: 16 }}
							/>

						</Box>
						<CourseComponent />
					</Box>
				</Layout>
			</Layout>

		</>
	)
});

export default SearchForm;
