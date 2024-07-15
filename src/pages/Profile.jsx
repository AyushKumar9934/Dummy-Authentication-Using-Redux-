import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../Header'

const Profile = ({user}) => {
  return (
    <>
    <Header />
    <div style={{position:"relative",width:"100vw",height:"100vh",backgroundColor:"black",color:"white"}}>
    <div style={{
 position:"absolute",
 
   marginTop:"10%",
   marginLeft:"30%"
   
  
  
}}>
   <div><h3>Full Name:    {user.firstName+" "+user.lastName}</h3></div>
   <div><h3>Email:     {user.email}</h3></div>
   <div><h3>Password:    {user.password}</h3></div>
       



<Link to="/login" className='btn btn-primary btn-md' >Logout</Link>
    </div></div>
    </> )
}

export default Profile

