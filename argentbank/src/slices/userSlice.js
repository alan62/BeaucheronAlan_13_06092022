import { createSlice } from "@reduxjs/toolkit"
import { fetchUserDatas, updateUserDatas } from "../features/user"

/**
 * slice user of redux store
 * @return {Object} redux store modified
 */
 const userSlice = createSlice({
    name: "user",
    initialState: {
      firstName: "",
      lastName: "",
      editName: false,
    },
    reducers: {
      editName: (state) => {
        state.editName = true
        return state
      },
      resetUser: (state) => {
        state = { firstName: "", lastName: "", editName: false }
        return state
      },
      abort: (state) => {
        state.editName = false
        return state
      },
    },
    extraReducers: {
      [fetchUserDatas.pending]: () => {
        console.log("Pending")
      },
      [fetchUserDatas.fulfilled]: (state, { payload }) => {
        console.log("Fetch Successfully !")
        return {
          firstName: payload.body.firstName,
          lastName: payload.body.lastName,
          id: payload.body.id,
          createdAt: payload.body.createdAt,
          updatedAt: payload.body.updatedAt,
          status: payload.status,
          editName: false,
        }
      },
      [fetchUserDatas.rejected]: () => {
        console.log("Rejected !")
      },
      [updateUserDatas.fulfilled]: (state, { payload }) => {
        return {
          ...state,
          status: payload,
        }
      },
    },
  })
  
  export const { editName, resetUser, abort } = userSlice.actions
  export default userSlice.reducer