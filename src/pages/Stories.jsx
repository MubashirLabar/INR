import React, { useEffect, useMemo, useRef, useState } from 'react';
import './Waveform.css';
import { Grid, Typography, Link, CardMedia } from '@material-ui/core';

import { withRouter } from 'react-router-dom';
import Masonry from 'react-masonry-css';
import Aos from 'aos';
import { storiesStyles, singleStoryStyles } from './style';
import 'aos/dist/aos.css';
import Preloader from '../preloader/preloader';
import hoverStyle from './hover.module.css';
import StoriesComponent from '../components/Stories';

import { onScroll, paginate, openLink, storyImageLoaded } from '../utils';

const width = window.innerWidth;

const Stories = ({ history, stories }) => {
	const classes = storiesStyles();

	const [loader, setLoader] = useState(true);
	const [page, setPage] = useState(0);

	const _storyImageLoad = useRef(0);

	useEffect(() => {
		Aos.init({
			duration: 500,
			startEvent: 'storyImagesLoaded',
			once: true
		});
		Aos.refresh();

		window.addEventListener('scroll', () => onScroll(page, setPage));
		return () => window.removeEventListener('scroll', () => onScroll(page, setPage));
	});

	const storiesPaginated = useMemo(
		() =>
			paginate(stories, page).map((item, index) => (
				<StoriesComponent
					key={index}
					item={item}
					classes={classes}
					hoverStyle={hoverStyle}
					storyImageLoaded={() => storyImageLoaded(setLoader, _storyImageLoad)}
					index={index}
					history={history}
				/>
			)),
		[stories, page]
	);

	return (
		<>
			<div style={{ opacity: !stories || loader ? '1' : '0' }} className={classes.loaderContainer}>
				<Preloader />
			</div>
			<div>
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
						{storiesPaginated}
					</Masonry>
				)}
				<Grid className={classes.centerText}>
					<Grid className={classes.rightText} style={{ right: width > 992 ? 20 : 0 }}>
						<Typography className={classes.text}>OOO</Typography>
					</Grid>
					<Grid onClick={openLink} className={classes.leftText} style={{ left: width > 992 ? 20 : 0 }}>
						<Typography className={classes.text}>I Never Read,</Typography>
					</Grid>
				</Grid>
			</div>
		</>
	);
};

export default withRouter(Stories);
