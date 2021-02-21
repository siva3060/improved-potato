import React, { useState } from 'react'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import Typography from '@material-ui/core/Typography'
import ToggleCanCount from './ToggleCanCount'
import TimesPrice from './TimesPrice';
import TotalPriceComponent from './TotalPriceComponent';
export default function CanDisplay(props) {

   const {can, updateOrder } = props; // destructuring 
   const [canCount,setCanCount] = useState(0);

   const updateCan = (canCount)=>{
       setCanCount(canCount) 
       updateOrder(can,canCount)
   }
    
    return (
        <div>
           <Paper>     
            <Grid container spacing={2} justify="space-evenly" alignItems="center">
                <Grid item xs={6} >
                    <Typography variant="h3" color="primary" align="justify">{can.canName}</Typography>
                </Grid>
                <Grid item xs={2} >
                <ToggleCanCount updateCan={updateCan} />
                </Grid>
                <Grid item xs={2} >
                <TimesPrice canPrice={can.canPrice}/>
                </Grid>
                <Grid item xs={2} >
                <TotalPriceComponent canSubTotal={can.canSubTotal}/>
                </Grid>
            </Grid>
           </Paper> 
        </div>
    )
}

//TODO:
// How to restrict can count to just 0
// How to align the items vertically
