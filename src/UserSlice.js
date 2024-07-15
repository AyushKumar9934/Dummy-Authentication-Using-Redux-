import { createSlice,createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'


const initialState = {
   loading:false,
   user:null,
   error:null,
}
export const setLoginUser=createAsyncThunk('/user/loginUser',async(userCrendentials)=>{
  let request=await axios.post('https://dummyjson.com/auth/login',JSON.parse(userCrendentials));
  const response=await request.data;
  console.log("response data is ",response);
  localStorage.setItem('user',JSON.stringify({...response,password:JSON.parse(userCrendentials).password}));
  return response;

})

// export const setLoginUser=(userCrendentials)=>{fetch('https://dummyjson.com/auth/login', {
//   method: 'POST',
//   headers: { 'Content-Type': 'application/json' },
//   body: JSON.stringify(userCrendentials)
// })
// .then(res => {
//   console.log(res.status, res.statusText);
//   return res.json();
// })
// .then(console.log)
// .catch(error => console.error('Error:', error));

// }



export const UserSlice = createSlice({
  name: 'user',
  initialState,
  extraReducers:(builder)=>{

  builder
  .addCase(setLoginUser.pending,(state)=>{
    state.loading=true;
    state.user=null;
    state.error=null;
  })
  .addCase(setLoginUser.fulfilled,(state,action)=>{
    state.loading=false;
    state.user=action.payload;
    state.error=null;
  })
   .addCase(setLoginUser.rejected,(state,action)=>{
    state.loading=false;
    state.user=null;
    console.log("action error is ",action.error.message)
    state.error="Invalid Username or Password .Please Try again."
   })
  },
})

// Action creators are generated for each case reducer function


export default UserSlice.reducer