import { createSlice } from "@reduxjs/toolkit";


export const authSlice = createSlice({
    name: 'auth',
 initialState:{
    user: {name: null, email: null},
    token:null,
    isLoggedIn: false,
    isRefreshing: false,
 },
//  extraReducers: builder => builder.addCase(
//    register.fulfilled, (state, action)=>{
//       state.user = action.payload
//    } )
// це було б якщо б ми  використовували інший бек

reducers: {
   register(state, action ){
      state.isLoggedIn = true
    state.user = action.payload
   }

}
})

export const authReduser = authSlice.reducer
export const {register} = authSlice.actions