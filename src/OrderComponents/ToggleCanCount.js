import React,{useState} from 'react'
import Grid from '@material-ui/core/Grid'
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import Typography from '@material-ui/core/Typography'

export default function ToggleCanCount(props) {

    const [canCount, setCanCount] = useState(0)

    const reducedCanCount = (count)=>{
        count === -1 ? setCanCount(0) : setCanCount(count)
        props.updateCan(count)
    }
    const increaseCanCount = (count)=>{
            setCanCount(count)
            props.updateCan(count)
    }

    return (
  <Grid container item xs={1} spacing={1}  direction="column" justify="center" alignItems="center">
                <Grid item  >
                        <IconButton onClick={()=>increaseCanCount(canCount+1)}><AddIcon/></IconButton>
                    </Grid>
                    <Grid item  >
                        <Typography variant="h3" color="primary">{canCount}</Typography>
                    </Grid>
                    <Grid item >
                        <IconButton onClick={()=>reducedCanCount(canCount-1)}><RemoveIcon /></IconButton>
                    </Grid>
   </Grid>      
    )
}
