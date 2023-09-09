import { createSlice } from "@reduxjs/toolkit";

export const userInfoSlice = createSlice({
  name: "userInfo",
  initialState: {
    userName: "",
    email: "",
    password: "",
    location: "",
    photo: "",
  },
  reducers: {
    changeInfo: (state, action) => {
      state = { ...state, ...action.payload };
    },
  },
});

export const { changeInfo } = userInfoSlice.actions;

export default userInfoSlice.reducer;
