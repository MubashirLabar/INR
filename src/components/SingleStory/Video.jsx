import React from 'react';
import Vimeo from '@u-wave/react-vimeo';
import { Grid, Typography } from '@material-ui/core';

export default function Video({ classes, story, size }) {
	console.log('story...', story);
	return (
		<>
			<div className="meta videos">
				{story?.title && <div className="title">{story.title}</div>}
				{story?.subtitle && <div className="sub-title">{story.subtitle}</div>}
			</div>
			<Grid className={classes.videoContainer}>
				{story && story.vimeo_id && (
					<Vimeo
						color="#000"
						loop
						showTitle={false}
						showPortrait={false}
						video={story?.vimeo_id}
						volume={1}
						autoplay
						width={size[0] < 992 ? size[0] * 0.73 : size[0] * 0.82}
					/>
				)}
			</Grid>
		</>
	);
}
