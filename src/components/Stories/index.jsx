import React from 'react';
import { CardMedia } from '@material-ui/core';
import AlignCenter from '../../pages/AlignCenter';
import { goSingleStory } from '../../utils';

const Stories = ({ item, classes, hoverStyle, storyImageLoaded, index, history }) => {
	return (
		<div data-aos="fade" data-aos-delay={40 * index} className={hoverStyle.block1}>
			{/* <Grid className={singleStoryClasses.videosContainer}>*/}
			{/* <MainComponent _item={item} i={i} key={`${i}key`}/>*/}
			<AlignCenter>
				{/*{item.type === 'Podcast' && (*/}
				{/*	<Waveform slug={item.slug} data-aos="fade" data-aos-delay={250 * i} />*/}
				{/*)}*/}
				{item && item.image && (
					<CardMedia
						className={classes.storyImage}
						component="img"
						alt="story-image"
						width={400}
						image={item.image}
						onClick={() => goSingleStory(item.slug, history)}
						onLoad={storyImageLoaded}
					/>
					// <Vimeo
					// 	className={classes.storyImage}
					// 	color="#000"
					// 	loop
					// 	showTitle={false}
					// 	showPortrait={false}
					// 	video={item?.vimeo_id}
					// 	volume={1}
					// 	width={350}
					// 	onLoaded={storyImageLoaded}
					// 	onReady={() => {
					// 		item.videoLoaded = !item.videoLoaded;
					// 		setStories([...stories]);
					// 	}}
					// />
				)}

				{/* <div className={hoverStyle.block2}>*/}
				{/*	{!item.plusClicked ? (*/}
				{/*		item.videoLoaded ? (*/}
				{/*			item.videoLoaded && (*/}
				{/*				<div>*/}
				{/*					<Plus*/}
				{/*						style={{ cursor: 'pointer' }}*/}
				{/*						// onHover*/}
				{/*						onClick={() => {*/}
				{/*							item.plusClicked = !item.plusClicked;*/}
				{/*							setStories([...stories]);*/}
				{/*						}}*/}
				{/*					/>*/}
				{/*				</div>*/}
				{/*			)*/}
				{/*		) : (*/}
				{/*			<Plus*/}
				{/*				style={{ cursor: 'pointer' }}*/}
				{/*				// onHover*/}
				{/*				onClick={() => {*/}
				{/*					item.plusClicked = !item.plusClicked;*/}
				{/*					setStories([...stories]);*/}
				{/*				}}*/}
				{/*			/>*/}
				{/*		)*/}
				{/*	) : (*/}
				{/*		<div>*/}
				{/*			<Minus*/}
				{/*				style={{ cursor: 'pointer' }}*/}
				{/*				onClick={() => {*/}
				{/*					item.plusClicked = !item.plusClicked;*/}
				{/*					setStories([...stories]);*/}
				{/*				}}*/}
				{/*			/>*/}
				{/*			{item.entities?.map(entity => (*/}
				{/*				<Typography className={classes.dropdownText}>*/}
				{/*					{entity.value}*/}
				{/*				</Typography>*/}
				{/*			))}*/}
				{/*			<Link*/}
				{/*				color="inherit"*/}
				{/*				underline="always"*/}
				{/*				href=" "*/}
				{/*				className={classes.dropdownTextLink}*/}
				{/*			>*/}
				{/*				<Typography*/}
				{/*					color="inherit"*/}
				{/*					className={classes.dropdownTextLink}*/}
				{/*					onClick={() => goSingleStory(item.slug)}*/}
				{/*				>*/}
				{/*					More info*/}
				{/*				</Typography>*/}
				{/*			</Link>*/}
				{/*		</div>*/}
				{/*	)}*/}
				{/* </div>*/}
			</AlignCenter>
			{/* </Grid>*/}
		</div>
	);
};

export default Stories;
