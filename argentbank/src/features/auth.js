import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"
export const baseURL = "http://localhost:3001/api/v1"
/**
 * Async function for fetch user token
 * @returns {String} userToken
 */
export const fetchToken = createAsyncThunk(
  "auth/fetchToken",
  async ({ value }) => {
    let response = await axios.post(`${baseURL}/user/login`, {
      email: value.username,
      password: value.password,
    })
    if (value.checked) {
      localStorage.setItem(
        "user",
        JSON.stringify({ username: value.username, password: value.password })
      )
    }

    return response.data.body.token
  }
)