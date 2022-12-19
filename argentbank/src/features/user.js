import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"
export const baseURL = "http://localhost:3001/api/v1"

/**
 * Async Function  for fetching user datas
 * @param {string} token user token
 * @returns {Object} userDatas
 */
export const fetchUserDatas = createAsyncThunk(
  "user/fetchUserDatas",
  async (token) => {
    let res = await axios({
      method: "post",
      url: `${baseURL}/user/profile`,
      headers: {
        authorization: `Bearer ${token}`,
      },
    }).catch((err) => console.log(err))
    return { body: res.data.body, status: res.status }
  }
)

/**
 * async function for updating user name
 * @param {object} datas first and last name changed
 * @returns {string} request status
 *
 */
export const updateUserDatas = createAsyncThunk(
  "user/updateUserDatas",
  async ({ datas }) => {
    const res = await axios({
      method: "put",
      url: `${baseURL}/user/profile`,
      headers: {
        authorization: `Bearer ${datas.token}`,
      },
      data: {
        firstName: datas.firstName,
        lastName: datas.lastName,
      },
    }).catch((err) => console.log(err))
    return res.status
  }
)
