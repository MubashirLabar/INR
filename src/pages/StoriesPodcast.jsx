import React, { useEffect, useRef, useState } from 'react';
import './Waveform.css';
import { Grid, Typography, Link, CardMedia } from '@material-ui/core';
import Plus from '@mui/icons-material/Add';
import Minus from '@mui/icons-material/Remove';
import { withRouter } from 'react-router-dom';
import Masonry from 'react-masonry-css';
import Aos from 'aos';
import { storiesStyles, singleStoryStyles } from './style';
import { getStoriesVideo } from '../services/storyService';
import 'aos/dist/aos.css';
import AlignCenter from './AlignCenter';
import Preloader from '../preloader/preloader';
import hoverStyle from './hover.module.css';
import Waveform from './Waveform-bkup';
import { goFrontPage, goSingleStory, openLink, storyImageLoadedPodcast } from '../utils';

const width = window.innerWidth;
const StoriesPodcast = ({ history }) => {
	const classes = storiesStyles();
	const singleStoryClasses = singleStoryStyles();
	const [stories, setStories] = useState(null);
	// const [ test, setTest] = useState(null)
	const [loader, setLoader] = useState(true);
	const [page, setPage] = useState(0);
	const [size, setSize] = useState({ width: window.innerWidth, height: window.innerHeight });
	const _storyImageLoad = useRef(0);

	useEffect(() => {
		if (!stories)
			getStoriesVideo(res => {
				setStories(res.results);
			});
	}, [stories]);
	//console.log(stories);

	useEffect(() => {
		Aos.init({
			duration: 500,
			// startEvent: 'storyImagesLoaded',
			once: true
		});
		Aos.refresh();
		setLoader(false);
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

	return (
		<>
			<div style={{ opacity: !stories || loader ? '1' : '0' }} className={classes.loaderContainer}>
				<Preloader />
			</div>
			<div>
				{/* <div style={{ opacity: !loader ? '1' : '0' }}>*/}
				{stories && (
					<Masonry
						breakpointCols={{
							default: 3,
							1900: 3,
							1460: 2,
							980: 1
						}}
						className={classes.masonryGrid}
						columnClassName={classes.masonryGridColumn}
					>
						{stories
							.sort((a, b) => b.created_on.localeCompare(a.created_on))
							.slice(0, (page + 1) * 15)
							.map((item, i) =>
								item.type === 'Podcast' ? (
									<div data-aos="fade" data-aos-delay={40 * i} key={i} className={hoverStyle.block1}>
										{/*<Grid className={singleStoryClasses.videosContainer}>*/}
										{/* <MainComponent _item={item} i={i} key={`${i}key`}/>*/}
										<AlignCenter>
											<CardMedia
												className={classes.storyImage}
												component="img"
												alt="story-image"
												width={400}
												height={60}
												image={item.image}
												onClick={() => goSingleStory(item.slug, history)}
												onLoad={() => storyImageLoadedPodcast(setLoader, _storyImageLoad)}
											/>
											{/*<Waveform slug={item.slug} image={storyImageLoadedPodcast} />*/}
											{/*<div className={hoverStyle.block2}>*/}
											{/*	{!item.plusClicked ? (*/}
											{/*		item.videoLoaded ? (*/}
											{/*			item.videoLoaded && (*/}
											{/*				<div>*/}
											{/*					<Plus*/}
											{/*						style={{ cursor: 'pointer' }}*/}
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
					</Masonry>
				)}
				<Grid className={classes.centerText}>
					<Grid className={classes.rightText} style={{ right: width > 992 ? 20 : 0 }}>
						<Typography className={classes.text} onClick={goFrontPage}>
							OOO
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

export default withRouter(StoriesPodcast);
