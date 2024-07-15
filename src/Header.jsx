import React, { useState } from 'react'
import { Link, Navigate } from 'react-router-dom'
import Profile from './pages/Profile';

const Header = () => {
  
  return (
    <div  style={{ display:"flex",gap:"16px",backgroundColor:"black",color:"white",position:"relative",width:"100vw",height:"40px"}}>
      <div >  
        <Link style={{position:"absolute",right:"50px",top:"10px",fontSize:"16px",backgroundColor:"black",color:"white",fontWeight:"700",textUnderlineOffset:"false"}} to='/login'>Sign Up</Link>
      </div>
      

    </div>
  )
}

export default Header