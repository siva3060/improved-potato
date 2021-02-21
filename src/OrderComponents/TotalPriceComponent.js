import React from 'react'
import Grid from '@material-ui/core/Grid'
import { Typography } from '@material-ui/core'


export default function TotalPriceComponent({canSubTotal}) {
    return (
        <div>
            <Grid container spacing={3}>
                <Grid item >
                    <Typography variant="h3" color="secondary">=</Typography>
                </Grid>
                <Grid item >
                    <Typography variant="h3" color="secondary">{canSubTotal}</Typography>
                </Grid>
              
            </Grid>
            
        </div>
    )
}
