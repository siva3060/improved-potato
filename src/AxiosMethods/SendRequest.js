import React from 'react'
import axios from 'axios'


async function sendRequest(url, requestBody){
    const response = await axios.post(url,requestBody);
    return response.data 
}
export default sendRequest;