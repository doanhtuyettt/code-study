import HeaderDash from "../dashboard/HeaderDash"
import { styled } from "@mui/material/styles"
import { Box } from '@mui/material'
import { Rate, Row, Col } from 'antd'
import { RiGroupLine, RiTimeLine, RiStackLine, RiMagicLine } from 'react-icons/ri'
const DetailCourse = () => {
	const StyleBox = styled(Box)(() => ({
		background: '#fff',
	}))
	const ar1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
	return (
		<>
			<HeaderDash />
			<StyleBox>
				<div style={{
					background: '#5419dd',
					boxShadow: '0px 0px 20px rgba(29, 32, 188, 0.2)',
					borderRadius: '10px',
					position: 'relative',
					marginBottom: '-100px',
					zIndex: 5,
					padding: ' 10px 52px',
					color: 'white',
					margin: '50px 140px'
				}}>
					<p style={{ fontWeight: 600, fontSize: '28px' }}>Object Oriented-Programming in C++</p>

					<Row gutter={48}>

						<Col span={12} style={{ borderRight: '1px solid white' }}>
							<div style={{ display: 'flex', justifyContent: 'space-between' }}>
								<p><RiGroupLine /> 52092 students</p>
								<Rate allowHalf defaultValue={2.5} />
							</div>
							<p>
								Object-Oriented-Programming (Object-Oriented-Programming) is an object-based programming method to find out the nature of the problem. This course helps programmers learn programming techniques that all logic and practical
							</p>
						</Col>
						<Col span={6} style={{ borderRight: '1px solid white' }}>
							<div style={{ display: 'flex', justifyContent: 'space-between' }}>
								<p><RiTimeLine />Time</p>
								<p>40 hours</p>
							</div>
							<div style={{ display: 'flex', justifyContent: 'space-between' }}>
								<p><RiStackLine />Number of tasks</p>
								<p>40</p>
							</div>
							<div style={{ display: 'flex', justifyContent: 'space-between' }}>
								<p><RiMagicLine />Reward</p>
								<p>Certificate</p>
							</div>
						</Col>
						<Col span={6}>
							<p style={{ fontWeight: 600, fontSize: '28px', textAlign: 'center' }}>FREE</p>
						</Col>
					</Row>


				</div>

				<Row gutter={48} style={{ margin: '50px 116px' }}>
					<Col span={12}>
						<div style={{
							borderRadius: '5px',
							boxShadow: '0 5px 10px 0 rgba(178,178,178,.5)',
							paddingBottom: '15px',
							background: '#fff'
						}}>
							<div style={{ position: 'relative' }}>
								<img style={{ width: '100%' }} src='https://codelearn.io/Themes/TheCodeCampPro/Resources/Images/code-learn/bg-Lesson.png' />
								<div style={{
									position: 'absolute', borderRadius: '100px',
									top: '50%',
									left: '50%',
									padding: '8px 20px',
									transform: 'translate(-50%,-50%)',
									border: '1px solid grey'
								}}>Class and Object</div>
							</div>

							<div style={{ display: 'flex', justifyContent: 'space-between', border: '1ps solid grey' }}>
								{ar1.map(item =>
									<div style={{ padding: '0 5px', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '100px', color: '#f69046', border: '1px solid #f69046', width: '30px', height: '40px', margin: '8px 8px' }}>{item}</div>)}
							</div>
						</div>
					</Col>
					<Col span={12} >
						<div style={{
							borderRadius: '5px',
							boxShadow: '0 5px 10px 0 rgba(178,178,178,.5)',
							paddingBottom: '15px',
							background: '#fff'
						}}>
							<div style={{ position: 'relative' }}>
								<img style={{ width: '100%' }} src='https://codelearn.io/Themes/TheCodeCampPro/Resources/Images/code-learn/bg-Lesson.png' />
								<div style={{
									position: 'absolute', borderRadius: '100px',
									top: '50%',
									left: '50%',
									padding: '8px 20px',
									transform: 'translate(-50%,-50%)',
									border: '1px solid grey'
								}}>Static variables and methods</div>
							</div>
							<div style={{ display: 'flex' }}>
								{ar1.map(item =>
									<div style={{ padding: '0 5px', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '100px', color: '#f69046', border: '1px solid #f69046', width: '30px', height: '40px', margin: '8px 8px' }}>{item}</div>)}
							</div>
						</div>
					</Col>
				</Row>
				<Row gutter={48} style={{ margin: '50px 116px' }}>
					<Col span={12}>
						<div style={{
							borderRadius: '5px',
							boxShadow: '0 5px 10px 0 rgba(178,178,178,.5)',
							paddingBottom: '15px',
							background: '#fff'
						}}>
							<div><img style={{ width: '100%' }} src='https://codelearn.io/Themes/TheCodeCampPro/Resources/Images/code-learn/bg-Lesson.png' /></div>
							<div style={{ display: 'flex', justifyContent: 'space-between', border: '1ps solid grey' }}>
								{ar1.map(item =>
									<div style={{ padding: '0 5px', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '100px', color: '#f69046', border: '1px solid #f69046', width: '30px', height: '40px', margin: '8px 8px' }}>{item}</div>)}
							</div>
						</div>
					</Col>
					<Col span={12} >
						<div style={{
							borderRadius: '5px',
							boxShadow: '0 5px 10px 0 rgba(178,178,178,.5)',
							paddingBottom: '15px',
							background: '#fff'
						}}>
							<div><img style={{ width: '100%' }} src='https://codelearn.io/Themes/TheCodeCampPro/Resources/Images/code-learn/bg-Lesson.png' /></div>
							<div style={{ display: 'flex' }}>
								{ar1.map(item =>
									<div style={{ padding: '0 5px', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '100px', color: '#f69046', border: '1px solid #f69046', width: '30px', height: '40px', margin: '8px 8px' }}>{item}</div>)}
							</div>
						</div>
					</Col>
				</Row>
			</StyleBox >
		</>
	)
}
export default DetailCourse