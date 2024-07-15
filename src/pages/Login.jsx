import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';

import { setLoginUser } from '../UserSlice';
import { useNavigate } from 'react-router-dom';
import Header from '../Header';




const Login = () => {
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("")
    const nevigate=useNavigate();
    const {loading,error}=useSelector((state)=>state.user);
    const dispatch=useDispatch();
    function handleSubmit(e){
        e.preventDefault();
       
        let userCredential=JSON.stringify({username:email,password})
        
        console.log(`UserCredentials is ,${userCredential} and type is ${typeof userCredential}`);
        dispatch(setLoginUser(userCredential)).then((result)=>{
            if(result.payload){
                setEmail("");
                setPassword("");
                nevigate("/")
            }
        }).catch((error)=>{
            console.log("error comming is ",error);
        })


    }
  return (
    <>
    <Header />
   <div style={{position:"relative",width:"100vw",height:"100vh",backgroundColor:"black",color:"white"}}>
    <form style={{
 position:"absolute",
 
   marginTop:"10%",
   marginLeft:"30%"
   
  
  
}} className='form-group' onSubmit={(e)=>handleSubmit(e)}>
  <h1>Sign Up</h1>
  <label htmlFor="email">Username</label>
  <input  placeholder='UserName' value={email} onChange={(e)=>setEmail(e.target.value)} type="text" style={{width:"100%",backgroundColor:"black",color:"white",borderColor:"black",borderBottom:"solid 1px white",}}required />
  <br></br>
  <label htmlFor="password">Password</label>
  <input placeholder='Password' value={password} onChange={(e)=>setPassword(e.target.value)} style={{width:"100%",backgroundColor:"black",color:"white",borderColor:"black",borderBottom:"solid 1px white"}}type="password" required />
  <br></br>
  <button style={{backgroundColor:"white",color:"black",marginTop:"10px"}} type="submit" className='btn btn-success btn-mid'>{loading?"loading...":"Sign Up"}</button>

    </form>
    {error&& (<div className='alert alert-danger' role='alert'>{error}</div>)}
    </div>
    </>
    
  )
}

export default Login