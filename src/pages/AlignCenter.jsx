import { Grid } from '@material-ui/core';
import React from 'react';

export default function AlignCenter(props)
{
  return (
    <Grid container direction="column" alignItems="center" justifyContent="center" style={props.style ? props.style : {}}>
        <Grid item xs={12}>
            {props.children}
        </Grid>
    </Grid>
  );
}