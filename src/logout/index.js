
import React, { useEffect } from 'react';

import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

const Logout = () => {
    const dispatch=useDispatch()

    const navigate=useNavigate()
    useEffect(() => {
        
        fetch('https://simplisaleshw.cotunnel.com/graphql', {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + window.localStorage.getItem('token')
            },
            body: JSON.stringify({
                query: `mutation {
                    logout 
                  }`})
        })
            .then(response => response.json())
            .then(result => {
                console.log("logout", result)
            })
            .catch(error => {
                console.error('Error:', error);
            });
            dispatch({
                type:"logout"
            })
            navigate('/')
            
    })
    

 return <>
 </>
}
export default Logout