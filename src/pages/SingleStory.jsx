import React, { useEffect, useState, useLayoutEffect, useRef } from 'react';
import { withRouter } from 'react-router-dom';
import Aos from 'aos';
import { openLink } from '../utils';
import { singleStoryStyles } from './style';
import { getSingleStory } from '../services/storyService';
import 'aos/dist/aos.css';
import WaveformSinger from './WaveformSinger';
import Preloader from '../preloader/preloader';
import Video from '../components/SingleStory/Video';
import SingleStoryComponent from '../components/SingleStory';
import Description from '../components/SingleStory/Description';
import RelatedStories from '../components/SingleStory/RelatedStories';

const SingleStory = ({ location, history }) => {
	const classes = singleStoryStyles();
	const [story, setStory] = useState(null);
	const [size, setSize] = useState([0, 0]);
	const [loader, setLoader] = useState(true);
	//const _storyImageLoad = useRef(0);

	useLayoutEffect(() => {
		Aos.init({
			duration: 2000,
			once: true
		});
		Aos.refresh();
		setLoader(false);
		function updateSize() {
			setSize([window.innerWidth, window.innerHeight]);
		}

		window.addEventListener('resize', updateSize);
		updateSize();
		return () => window.removeEventListener('resize', updateSize);
	}, []);

	useEffect(() => {
		setLoader(true);
		let slug = location.pathname.split('/story/');
		slug = slug.length > 1 ? slug[1] : null;
		if (slug) {
			(async function () {
				const data = await getSingleStory(slug);
				setStory(data);
				window.scrollTo(0, 0);
				setLoader(false);
			})();
		}
	}, [location.pathname]);

	console.log('story...', story);

	return (
		<>
			{!story || loader ? (
				<div className={classes.loaderContainerSingle}>
					<Preloader />
				</div>
			) : (
				<>
					{story && story.type === 'Podcast' ? (
						<WaveformSinger story={story} />
					) : (
						<Video classes={classes} story={story} size={size} />
					)}
					<div className={classes.container}>
						{story && <SingleStoryComponent classes={classes} story={story} />}
						{story?.related_stories && (
							<RelatedStories setLoader={setLoader} history={history} classes={classes} story={story} />
						)}
						<Description handler={openLink} classes={classes} history={history} />
					</div>
				</>
			)}
		</>
	);
};

export default withRouter(SingleStory);
