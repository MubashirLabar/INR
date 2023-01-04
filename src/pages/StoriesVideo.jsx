import React, { useEffect, useRef, useState } from 'react';
import './Waveform.css';
import { Grid, Typography, Link, CardMedia } from '@material-ui/core';
import { withRouter } from 'react-router-dom';
import Masonry from 'react-masonry-css';
import Aos from 'aos';
import { storiesStyles } from './style';
// eslint-disable-next-line import/named
import { getStoriesVideo } from '../services/storyService';
import 'aos/dist/aos.css';
import AlignCenter from './AlignCenter';
import Preloader from '../preloader/preloader';
import hoverStyle from './hover.module.css';

const width = window.innerWidth;
const Stories = ({ history }) => {
	const classes = storiesStyles();
	const [stories, setStories] = useState(null);
	const [loader, setLoader] = useState(true);
	const [page, setPage] = useState(0);
	const _storyImageLoad = useRef(0);

	useEffect(() => {
		if (!stories) {
			getStoriesVideo(res => {
				setStories(res.results);
			});
		}
	}, [stories]);

	useEffect(() => {
		Aos.init({
			duration: 500,
			startEvent: 'storyImagesLoaded',
			once: true
		});
		Aos.refresh();
	});

	useEffect(() => {
		const onScroll = e => {
			if (document.body.offsetHeight - (window.innerHeight + window.scrollY) <= 100) {
				setPage(page + 1);
			}
		};

		window.addEventListener('scroll', onScroll);

		return () => window.removeEventListener('scroll', onScroll);
	});

	const goSingleStory = slug => {
		history.push({
			pathname: `/story/${slug}`
		});
	};

	const goFrontPage = () => {
		history.push({
			pathname: '/'
		});
	};

	const openLink = () => {
		const win = window.open('https://www.ineverread.com/', '_blank');
		win.focus();
	};

	const storyImageLoaded = () => {
		_storyImageLoad.current += 1;
		if (_storyImageLoad.current === 5) {
			document.dispatchEvent(new Event('storyImagesLoaded', { bubbles: true }));
			setLoader(false);
		}
	};

	return (
		<>
			<div style={{ opacity: !stories || loader ? '1' : '0' }} className={classes.loaderContainer}>
				<Preloader />
			</div>
			<div>
				{stories && (
					<Masonry
						breakpointCols={{
							// default: 5,
							// 2400: 4,
							// 1900: 3,
							// 1460: 2,
							// 980: 1
							default: 3,
							1900: 3,
							1460: 2,
							980: 1
						}}
						className={classes.masonryGrid}
						columnClassName={classes.masonryGridColumn}
					>
						{stories.map((item, i) =>
							item.type === 'Portrait' ? (
								<div data-aos="fade" data-aos-delay={40 * i} key={i} className={hoverStyle.block1}>
									{/*<Grid className={singleStoryClasses.videosContainer}>*/}
									{/* <MainComponent _item={item} i={i} key={`${i}key`}/>*/}
									<AlignCenter>
										{item && item.vimeo_id && (
											<CardMedia
												className={classes.storyImage}
												component="img"
												alt="story-image"
												width={400}
												image={item.image}
												onClick={() => goSingleStory(item.slug)}
												onLoad={storyImageLoaded}
											/>
											// <Vimeo
											// 	className={classes.storyImageVideo}
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

										{/*<div className={hoverStyle.block2}>*/}
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
										{/*</div>*/}
									</AlignCenter>
									{/*</Grid>*/}
								</div>
							) : null
						)}
						<div>Here is the story</div>
					</Masonry>
				)}
				<Grid className={classes.centerText}>
					<Grid className={classes.rightText} style={{ right: width > 992 ? 20 : 0 }}>
						<Typography className={classes.text} onClick={goFrontPage}>
							OOOO
						</Typography>
					</Grid>
					<Grid
						onClick={() => openLink()}
						className={classes.leftText}
						style={{ left: width > 992 ? 20 : 0 }}
					>
						<Typography className={classes.text}>I Never Read,</Typography>
					</Grid>
				</Grid>
			</div>
		</>
	);
};

export default withRouter(Stories);
