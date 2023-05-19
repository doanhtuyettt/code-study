import React, { useState, forwardRef } from "react";
import { Box, IconButton, Typography } from "@mui/material";
import { RiSearch2Line, RiRefreshLine, RiArrowUpLine, RiFacebookBoxFill, RiGoogleFill, RiYoutubeFill, RiPantoneFill } from 'react-icons/ri';
import { Select } from "@/components/DesignSystem/form";
import InputTags, { TagsList } from "@/components/input-tags";
import CourseComponent from './CourseComponent'
import HeaderDash from "./HeaderDash";
import { Layout, Menu, Row, Col, FloatButton } from 'antd';
import { FundProjectionScreenOutlined, HomeOutlined, HourglassOutlined, PlusOutlined } from '@ant-design/icons';
import { styled } from '@mui/material';
import Link from "next/link";
import {RiGamepadLine} from 'react-icons/ri'
const { Sider } = Layout;
const SubMenu = Menu.SubMenu;
const SearchForm = forwardRef(({

}) => {
	const [colap, setColap] = useState(false)
	const onCollapse = () => {
		setColap(!colap);
	};
	const jobCats = []
	const provinces = []
	const selectStyle = {
		marginRight: '12px', color: 'white',
		'& .MuiOutlinedInput-notchedOutline': {
			borderColor: 'white'
		},
		'& .MuiSvgIcon-root': {
			color: 'white'
		}
	}
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
	const [visible, setVisible] = useState(false)

	const toggleVisible = () => {
		const scrolled = document.documentElement.scrollTop;
		if (scrolled > 300) {
			setVisible(true)
		}
		else if (scrolled <= 300) {
			setVisible(false)
		}
	};

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth'
		});
	};
	if (typeof window !== 'undefined') {
		window.addEventListener('scroll', toggleVisible);
	}
	return (
		<>
			<HeaderDash />
			<Layout>
				<StyleLayer>
					<Sider
						collapsible
						collapsed={colap}
						onCollapse={onCollapse}
					>
						<div className="logo" />
						<Menu theme="light" defaultSelectedKeys={['1']} mode="inline">
							<Menu.Item key="1">
								<HomeOutlined />
								<span>HOME</span>
							</Menu.Item>
							<SubMenu
								key="sub2"
								title={
									<span>
										<HourglassOutlined />
										<span>LEARING</span>
									</span>
								}
							>
								<Menu.Item key="6">COURSE</Menu.Item>
								<Menu.Item key="8">LESSON</Menu.Item>
							</SubMenu>
							<Menu.Item key="3">

								<FundProjectionScreenOutlined />
								<span>ROAD MAP</span>
							</Menu.Item>

							<Menu.Item key="4">
								<RiGamepadLine />
								<Link href='/game'> GAME</Link>
							</Menu.Item>
							<Menu.Item key="5">
								<PlusOutlined />
								<span>MORE</span>
							</Menu.Item>


						</Menu>
					</Sider>
				</StyleLayer>
				<Layout style={{ padding: '0 24px 24px', minHeight: '100vh', overflowY: 'auto' }}>
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
			<div style={{ background: '#fff', position: 'sticky', }}>
				<div style={{
					color: '#fff',
					textAlign: 'center',
					backgroundImage: 'url(https://codelearn.io/Themes/TheCodeCampPro/Resources/Images/landing-v2/footer-banner-bg.png)',
					height: '250px',
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center'

				}}>
					<div>
						<p style={{ fontSize: '32px' }}>AROUSE YOUR <span style={{ color: '#FAD93C' }}>PROGRAMMING PASSION</span>!</p>
						<p>Register and join the best developer community!
						</p>
					</div>

				</div>
				<div style={{ padding: '30px 80px' }}>

					<Row gutter={48}>
						<Col span={12}>
							<div style={{ display: 'flex' }}>
								<RiPantoneFill color={'rgb(118, 18, 255)'} size={35} />
								<p style={{ fontWeight: 600, fontSize: '25px', color: 'rgb(118, 18, 255)', margin: '0 0 16px 16px' }}>CODE STUDY</p>
							</div>

							<p>CodeStudy is an online platform that helps users to learn, practice coding skills and join the online coding contests.</p>
							<div>
								<RiFacebookBoxFill color='#37599e' size={30} style={{ marginRight: '20px' }} />
								<RiGoogleFill color='#eb2c3b' size={30} style={{ marginRight: '20px' }} />
								<RiYoutubeFill color='#eb2c3b' size={30} style={{ marginRight: '20px' }} />

							</div>
						</Col>
						<Col span={12}>
							<Row style={{ color: '#2c31cf', fontSỉze: '16px', marginBottom: '28px', fontWeight: 500 }}>
								<Col span={8}>LINKS</Col>
								<Col span={8}>INFORMATION</Col>
								<Col span={8}>HELP</Col>

							</Row>
							<Row style={{ color: '#1e266d', fontSỉze: '16px', marginBottom: '8px' }}>
								<Col span={8}>Learning</Col>
								<Col span={8}>About Us</Col>
								<Col span={8}>Help</Col>
							</Row>
							<Row style={{ color: '#1e266d', fontSỉze: '16px', marginBottom: '8px' }}>
								<Col span={8}>Training</Col>
								<Col span={8}>Terms of Use</Col>
								<Col span={8}>Discussion</Col>
							</Row>
							<Row style={{ color: '#1e266d', fontSỉze: '16px', marginBottom: '8px' }}>
								<Col span={8}>Fights</Col>
								<Col span={8}></Col>
								<Col span={8}>Contact us</Col>
							</Row>
							<Row style={{ color: '#1e266d', fontSỉze: '16px', marginBottom: '8px' }}>
								<Col span={24}>Game</Col>
							</Row>

						</Col>
					</Row>
				</div>

			</div>
			<FloatButton onClick={scrollToTop} icon={<RiArrowUpLine />} />
		</>
	)
});

export default SearchForm;
