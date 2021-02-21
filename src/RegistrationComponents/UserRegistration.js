import React, {useState} from 'react'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import  sendRequest  from "../AxiosMethods/SendRequest";



export default function UserRegistration() {

    const userRegistrationURL = "http://192.168.0.102:8080/consumer/register"
    const [userName, setUserName] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")
    const [address, setAddress] = useState("")
    const [geoLocation, setGeoLocation] = useState("DummyLocation")

    const registerUser = ()=>{
        
        console.log("sending request to user registration")
            const registrationDetails = {   userName: userName,
                                            phoneNumber: phoneNumber,
                                            address: address,
                                            geoLocation: geoLocation
                                        }

            const registrationjson = JSON.stringify(registrationDetails);
            console.log(registrationjson)
            sendRequest(userRegistrationURL,registrationjson)
    }
    return (
        <Grid container justify="center" spacing={2} direction="column" alignItems="center">
            <Grid item xs={12}>
                <TextField
                  id="userName"
                  label="Name"
                  variant="outlined"
                  autoFocus
                  fullWidth
                  onChange={(event)=>{setUserName(event.target.value)}}
                
                />
            </Grid> 
            <Grid item xs={9}>
                <TextField
                  id="phoneNumber"
                  label="phoneNumber"
                  variant="outlined"
                  fullWidth
                  onChange={(event)=>{setPhoneNumber(event.target.value)}}
                />
            </Grid> 
            <Grid item xs={9}>
                <TextField
                  id="address"
                  label="address"
                  variant="outlined"
                  fullWidth
                  onChange={(event)=>{setAddress(event.target.value)}}
                />
            </Grid> 
            <Grid item xs={9}>
                <Button variant="contained" color="primary" onClick={registerUser}>
                    Register 
                </Button>
            </Grid> 
        </Grid>
    )
}
