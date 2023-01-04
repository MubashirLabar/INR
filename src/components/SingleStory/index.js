import React from 'react';
import { Grid, Typography, Link } from '@material-ui/core';
import Entity from './Entity';
import getHostName from '../../core';

export default function index({ classes, story }) {
	return (
		<Grid className={classes.contentContainer}>
			{story.related_event && (
				<p href={story.related_event.edcat_url} className={classes.contentText}>
					{story.related_event.value}
				</p>
			)}
			{story?.text && (
				<Typography className={classes.contentText} style={{ marginBottom: '20px' }}>
					{story?.text}
				</Typography>
			)}
			{story?.website && (
				<Link
					underline="hover"
					href={story.website}
					className={classes.contentText}
					style={{ marginBottom: '20px' }}
				>
					{getHostName(story.website)}
				</Link>
			)}
			{story.entities.map((item, idx) => (
				<Entity classes={classes} key={(item.slug, idx)} item={item} />
			))}
		</Grid>
	);
}
