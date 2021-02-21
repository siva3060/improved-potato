import React from 'react'
import Grid from '@material-ui/core/Grid'
import { Typography } from '@material-ui/core'

export default function TimesPrice({canPrice}) {
    return (
        <div>
            <Grid  container  spacing={6} alignItems="center">
                <Grid item spacing={1}>
                    <Typography variant="h3" color="secondary">X</Typography> 
                </Grid>
                <Grid item spacing={1}>
                    <Typography variant="h3" color="secondary">{canPrice}</Typography> 
                </Grid>
            </Grid>
            
        </div>
    )
}
