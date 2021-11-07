import { createSlice } from '@reduxjs/toolkit'
import * as waxjs from "@waxio/waxjs/dist";
const initialState = {
  username:"null",
  wax:null,
}

export const waxSlice = createSlice({
  name: 'wax',
  initialState,
  reducers: {
    ADD_WAX: async (state,action)=>{
        const {userAccount,wax} = action.payload
        state.username = userAccount;
        state.wax = wax;
      },

  },
})

// Action creators are generated for each case reducer function
export const { ADD_WAX } = waxSlice.actions

export default waxSlice.reducer