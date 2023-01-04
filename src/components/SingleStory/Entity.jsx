import React from 'react';
import { Grid, Typography, Link } from '@material-ui/core';

export default function Entities({ classes, item, website }) {
	return (
		<div className={classes.entity}>
			<Grid>
				{item.edcat_url && item.number_of_publications > 0 && (
					<Link
						underline="hover"
						href={item.edcat_url}
						className={classes.contentText}
					>{`${item.number_of_publications} publications by ${item?.value} on edcat`}</Link>
				)}
			</Grid>
		</div>
	);
}
