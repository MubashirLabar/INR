import React from 'react';
import Masonry from 'react-masonry-css';
import { CardMedia } from '@material-ui/core';
import { goSingleStory } from '../../utils';

export default function RelatedStories({ setLoader, classes, story, history }) {
	return (
		<Masonry
			breakpointCols={{
				default: 3,
				// 2400: 4,
				1900: 3,
				1460: 2,
				980: 1
			}}
			className={classes.masonryGrid}
			columnClassName={classes.masonryGridColumn}
		>
			{story?.related_stories.map((item, i) => (
				<div data-aos="fade" data-aos-delay={40 * i} key={i} className={classes.container}>
					<CardMedia
						className={classes.storyImageSingle}
						component="img"
						alt="story-image"
						image={item.image}
						onClick={() => {
							goSingleStory(item.slug, history);
						}}
					/>
				</div>
			))}
		</Masonry>
	);
}
