import React, { useState, useEffect } from 'react';
// import { useSelector } from 'react-redux';
import { Link, useLocation, useParams } from 'react-router-dom';

const Profile = () => {
    // const UserName = useSelector((state) => state.auth.UserName)
    // const User_Id = useSelector((state) => state.auth.UserId)
    // const Admin = useSelector((state) => state.auth.Admin)
    const [UserData, setUserData] = useState('')
    const [UserId, setUserId] = useState(0)
    const { pathname } = useLocation()
    const { id } = useParams()


    useEffect(() => {
        
        fetch('https://simplisaleshw.cotunnel.com/graphql', {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + window.localStorage.getItem('token')
            },
            body: JSON.stringify({
                query: `query {
                    user {
                        name
                        contact
                        contactEmail
                        contactName
                        address1
                        address2
                        city
                        country
                        postCode
                        telephone

                    }
                  }`})
        })
            .then(response => response.json())
            .then(result => {
                console.log("user data", result)
                setUserData(result?.data?.user)
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }, [!UserData])
    return (

        <div className='container p-5'>
            <div className='d-flex flex-column align-items-center'>
                <img src="https://icons.iconarchive.com/icons/aha-soft/people/256/user-icon.png"
                    className="rounded-circle z-depth-1-half avatar-pic" alt="example placeholder avatar" />
                <h3>{UserData?.name}  </h3>
            </div>
            <table className='table table-hover'>
                <thead>
                    <tr>
                            <td className='d-flex justify-content-between'>User Information <Link to={`/edit-profile`} >Edit Profile</Link></td>
                        

                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Name: {UserData?.name}  </td>
                    </tr>
                    <tr>
                        <td>Email: {UserData?.contactEmail}  </td>
                    </tr>
                    <tr>
                        <td>Contact: {UserData?.contact} </td>
                    </tr>
                    <tr>
                        <td>Telephone: {UserData?.telephone} </td>
                    </tr>

                    <tr>
                        <td>Address: {UserData?.address1}  </td>
                    </tr>
                    <tr>
                        <td>City: {UserData?.city}  </td>
                    </tr>
                    <tr>
                        <td>Country: {UserData?.country}  </td>
                    </tr>
                    <tr>
                        <td>Post Code: {UserData?.postCode}  </td>
                    </tr>
                </tbody>
            </table>
            

        </div >
    )
}
export default Profile