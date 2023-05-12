import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import { Box, Card } from '@mui/material';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { RiStarSmileFill, RiHeart3Fill } from 'react-icons/ri'
import { Row, Col } from 'antd'

const ExpandMore = styled((props) => {
	const { expand, ...other } = props;
	return <IconButton {...other} />;
})(({ theme, expand }) => ({
	transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
	marginLeft: 'auto',
	transition: theme.transitions.create('transform', {
		duration: theme.transitions.duration.shortest,
	}),
}));

export const Container = styled(Card)(() => {
	return {
		position: 'relative',
		width: '100%',
		'&:hover .img-course': {
			opacity: 0.3
		},
		'&:hover .middle': {
			opacity: 1,
		},

		'.img-course': {
			opacity: 1,
			display: 'block',
			width: '100%',
			height: 'auto',
			transition: '.5s ease',
			backfaceVisibility: 'hidden',
		},

		'.middle': {
			transition: '.5s ease',
			opacity: 0,
			position: 'absolute',
			top: '50%',
			left: '50%',
			transform: 'translate(-50%, -50%)',
			textAlign: 'center',
		},
		'.text': {
			backgroundColor: '#fff',
			borderRadius:'50px',
			color: 'black',
			fontSize: '12px',
			fontWeight:600,
			padding: ' 16px 32px',
		}
	};
});
export default function RecipeReviewCard() {

	const [expanded, setExpanded] = useState(false);
	const [love, setLove] = useState(false)

	const handleExpandClick = () => {
		setExpanded(!expanded);
	};

	const listCourse = [
		{
			name: 'html',
			img: 'https://files.fullstack.edu.vn/f8-prod/courses/15/62f13d2424a47.png',
			detail: 'Khóa học phù hợp cho những bạn lần đầu làm quen với lập trình web'
		}, {
			name: 'html',
			img: 'https://files.fullstack.edu.vn/f8-prod/courses/3.png',
			detail: 'Khóa học phù hợp cho những bạn đã quen với lập trình web'
		}
		, {
			name: 'html',
			img: 'https://files.fullstack.edu.vn/f8-prod/courses/19/62f13cb607b4b.png',
			detail: 'Khóa học phù hợp cho những bạn đã quen với lập trình web'
		},
		{
			name: 'html',
			img: 'https://files.fullstack.edu.vn/f8-prod/courses/20/62f13dded314e.png',
			detail: 'Khóa học phù hợp cho những bạn đã quen với lập trình web'
		},
	]

	const listCourse2 = [
		{
			name: 'html',
			img: 'https://files.fullstack.edu.vn/f8-prod/courses/7.png',
			detail: 'Khóa học phù hợp cho những bạn lần đầu làm quen với lập trình web'
		}, {
			name: 'html',
			img: 'https://files.fullstack.edu.vn/f8-prod/courses/13/13.png',
			detail: 'Khóa học phù hợp cho những bạn đã quen với lập trình web'
		}
		, {
			name: 'html',
			img: 'https://files.fullstack.edu.vn/f8-prod/courses/19/62f13cb607b4b.png',
			detail: 'Khóa học phù hợp cho những bạn đã quen với lập trình web'
		},
		{
			name: 'html',
			img: 'https://files.fullstack.edu.vn/f8-prod/courses/20/62f13dded314e.png',
			detail: 'Khóa học phù hợp cho những bạn đã quen với lập trình web'
		},
	]

	return (
		<>
			<Box sx={{ mt: 5 }}>
				<Box sx={{ display: 'flex' }}>
					<Typography sx={{
						color: '#242424',
						fontSize: 28,
						fontWeight: '900',
						mb: 1,
						mr: 1
					}}>Course Pro</Typography>
					<RiStarSmileFill color={'yellow'} size={30} />
				</Box>
				<Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
					<Row gutter={16}>
						{listCourse.map(item =>
							<Col span={6}>
								<Card sx={{ borderRadius: '25px', maxWidth: 325, boxShadow: ' 5px 10px 18px #888888' }}>
									<CardMedia
										component="img"
										height="194"
										image={item?.img}
										alt="Paella dish"
									/>
									<CardContent>
										<Typography variant="body1" color="text.secondary">
											{item?.detail}
										</Typography>
									</CardContent>
									<CardActions disableSpacing>
										<IconButton aria-label="add to favorites">
											<RiHeart3Fill color={love ? '#f31336' : 'grey'} onClick={() => setLove(prev => !prev)} />
										</IconButton>
										<IconButton aria-label="share">
											{/* <ShareIcon /> */}
										</IconButton>
										<ExpandMore
											expand={expanded}
											onClick={handleExpandClick}
											aria-expanded={expanded}
											aria-label="show more"
										>
											{/* <ExpandMoreIcon /> */}
										</ExpandMore>
									</CardActions>
								</Card>
							</Col>
						)}

					</Row>

				</Box>
			</Box>
			<Box sx={{ mt: 5 }}>
				<Box sx={{ display: 'flex' }}>
					<Typography sx={{
						color: '#242424',
						fontSize: 28,
						fontWeight: '900',
						mb: 1,
						mr: 1
					}}>Khóa học miễn phí</Typography>

				</Box>
				<Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
					<Row gutter={16}>
						{listCourse2.map(item =>
							<Col span={6}>
								<Container className='container-box' sx={{ borderRadius: '25px', maxWidth: 325, boxShadow: ' 5px 10px 18px #888888' }}>
									<CardMedia
										component="img"
										height="194"
										image={item?.img}
										alt="Paella dish"
										className='img-course'
									/>
									<div className="middle">
										<div className="text">Xem khóa học</div>
									</div>

									{/* <CardActions disableSpacing>
										<IconButton aria-label="add to favorites">
											<RiHeart3Fill color={love ? '#f31336' : 'grey'} onClick={() => setLove(prev => !prev)} />
										</IconButton>
										<IconButton aria-label="share">
						
										</IconButton>
										<ExpandMore
											expand={expanded}
											onClick={handleExpandClick}
											aria-expanded={expanded}
											aria-label="show more"
										>
									
										</ExpandMore>
									</CardActions> */}
								</Container>
							</Col>
						)}
					</Row>
				</Box>
			</Box>
		</>
	);
}