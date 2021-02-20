import React, { useState } from 'react'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import Typography from '@material-ui/core/Typography'
import ToggleCanCount from './ToggleCanCount'
export default function CanDisplay(props) {

   const {canName, updateOrder} = props; // destructuring 
   const [canCount,setCanCount] = useState(0);

   const updateCan = (canCount)=>{
       setCanCount(canCount) 
       updateOrder(canName,canCount)
   }
    
    return (
        <div>
           <Paper>     
            <Grid container spacing={2} justify="space-evenly" alignItems="center">
                <Grid item xs={10} >
                    <Typography variant="h3" color="primary" align="justify">{canName}</Typography>
                </Grid>
                <ToggleCanCount updateCan={updateCan} />
            </Grid>
           </Paper> 
        </div>
    )
}

//TODO:
// How to restrict can count to just 0
// How to align the items vertically
