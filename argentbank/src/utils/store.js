import { configureStore } from "@reduxjs/toolkit"
import authSlice from "../slices/authSlice"
import userSlice from "../slices/userSlice"

/**
 * redux store
 * @returns {Object} differents slices of store
 */
export const store = configureStore({
  reducer: {
    auth: authSlice,
    user: userSlice,
  },
})