import React, { useState} from 'react'
import Grid from '@material-ui/core/Grid'
import CanDisplay from './CanDisplay'
import Button from '@material-ui/core/Button'

export default function CanSelection() {

    const initialData = [{
        canName: "KINLEY",
        canPrice: 85,
        canSubTotal:0
    },
    {
        canName: "BISLERI",
        canPrice: 70,
        canSubTotal:0
    },
    {
        canName: "GENERIC",
        canPrice: 40,
        canSubTotal:0
    }]

    const [order, setOrder] = useState({})
    const [canTypes,setCanTypes] = useState(initialData)

   const updateOrder = (canName, canCount)=> {
      (!canName in order) ?
        setOrder({...{canName:canCount}}) : 
        setOrder({...order,[canName]:canCount}) 
   }

   const confirmOrder = ()=>{
      console.log(order) 
   }

    return (
        <div>
        <Grid container direction="column" spacing={2}>
            {canTypes.map(can=>(
                <Grid item xs={12} key={can}>
                    <CanDisplay  {... {can:can, updateOrder}}/>
                </Grid>
            ))}
            <Grid item >
                <Button variant="contained" color="primary" onClick={confirmOrder}>
                        submit  
                </Button>
            </Grid>
        </Grid>
        </div>

    )
}
