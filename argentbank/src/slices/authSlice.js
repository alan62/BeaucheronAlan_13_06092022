import { createSlice } from "@reduxjs/toolkit"
import { fetchToken } from "../features/auth"


const authSlice = createSlice({
    
    //nom du slice
    name: "auth",
    //state initial
    initialState: {
      token: "",
      isLoaded: false,
    },
    reducers: {
      logout: (state) => {
        state = { token: "", isLoaded: false }
  
        return state
      },
    },
    extraReducers: {
      [fetchToken.pending]: () => {
        console.log("Pending")
      },
      [fetchToken.fulfilled]: (state, { payload }) => {
        console.log("Fetch Successfully !")
        return { ...state, token: payload, isLoaded: true }
      },
      [fetchToken.rejected]: () => {
        console.log("Rejected !")
      },
    },
  })
  
  export const { logout } = authSlice.actions
  export default authSlice.reducer