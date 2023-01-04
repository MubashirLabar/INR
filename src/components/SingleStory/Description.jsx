import React from 'react';
import { Grid, Typography } from '@material-ui/core';

const width = window.innerWidth;
export default function Description({ classes, handler, history }) {
	return (
		<Grid className={classes.centerText}>
			<Grid
				onClick={() => {
					history.push({
						pathname: '/'
					});
				}}
				className={classes.rightText}
				style={{ right: width > 992 ? 20 : 0 }}
			>
				<Typography className={classes.text}>OOO</Typography>
			</Grid>
			<Grid onClick={handler} className={classes.leftText} style={{ left: width > 992 ? 20 : 0 }}>
				<Typography className={classes.text}>I Never Read,</Typography>
			</Grid>
		</Grid>
	);
}
