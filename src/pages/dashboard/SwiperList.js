import { styled } from "@mui/material/styles";
import React from "react";
import { RiArrowDropLeftLine, RiArrowDropRightLine } from "react-icons/ri";
import SwiperCore, {
	Navigation,
	Pagination,
	Autoplay,
	Virtual,
} from "swiper/core";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Card } from '@mui/material';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { RiHeart3Fill } from 'react-icons/ri'

SwiperCore.use([Navigation, Pagination, Autoplay, Virtual]);
export const SliderStyle = styled("div")(() => ({
	"& .swiper-button-prev": {
		color: "#455570",
		background: "#F3F4F6",
		borderRadius: "100px",
		width: "48px",
		height: "48px",
		"&::after": {
			content: { RiArrowDropLeftLine },
			color: "#455570",
			fontSize: 14,
			fontWeight: 600,
		},
	},
	"& .swiper-button-next": {
		background: "#F3F4F6",
		borderRadius: "100px",
		width: "48px",
		height: "48px",
		"&::after": {
			content: { RiArrowDropRightLine },
			color: "#455570",
			fontSize: 14,
			fontWeight: 600,
		},
	},
}));


export default function SwiperList({ setLove, love, item }) {
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
	return (
		<SliderStyle>
			<Swiper
				id="swiper"
				virtual
				slidesPerView={4}
				spaceBetween={50}
				navigation
			//   pagination
			>
				{listCourse.map((item, index) => (
					<Card sx={{ borderRadius: '25px', boxShadow: ' 5px 10px 18px #888888' }}>
						<SwiperSlide key={`slide-${index}`} style={{ listStyle: "none" }}>

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
							</CardActions>
						</SwiperSlide>
					</Card>
				))}
			</Swiper>
		</SliderStyle >
	);
}
