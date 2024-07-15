import React, { useState } from "react";
import { Link } from "react-router-dom";
import Login from "./Login";
import Profile from "./Profile";
function getUser() {
  let user = localStorage.getItem("user");
  if (user) {
    user = JSON.parse(user);
   
  } else {
   user=null;
  }
  return user;
}


const Home = () => {
  const [user, setUser] = useState(getUser());
 
  return (<>{user ? <Profile user={user} /> : <Login />}</>);
};

export default Home;
