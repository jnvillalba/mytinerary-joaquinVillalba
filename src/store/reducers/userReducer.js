import { createReducer } from "@reduxjs/toolkit";
import userActions from "../actions/userActions";
const initialState = {
  user: {
    email: "",
    photo: "",
    _id: "",
    
  },isLoggedIn: false,
};

const userReducer = createReducer(initialState, (builder) => {
  return builder
    .addCase(userActions.sign_in.fulfilled, (state, action) => {
      let userData = {
        user: action.payload.user ?? null,
        token: action.payload.token ?? null,
      }
      return { ...state, ...userData };
    })
    .addCase(userActions.authenticate.fulfilled, (state, action) => {
      let userData = {
        user: action.payload.user ?? null,
        isLoggedIn: true?? false,
      }
      return { ...state, ...userData };
    })
    .addCase(userActions.sign_out.fulfilled, (state, action) => {
      return initialState
    });
});

export default userReducer;
