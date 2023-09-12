import { createReducer } from "@reduxjs/toolkit";
import userActions from "../actions/userActions";
const initialState = {
  user: {
    email: "",
    photo: "",
    _id: "",
  },
};

const userReducer = createReducer(initialState, (builder) => {
  return builder
    .addCase(userActions.sign_in.fulfilled, (state, action) => {
      return { user: action.payload.user };
    })
    .addCase(userActions.authenticate.fulfilled, (state, action) => {
      return { user: action.payload.user };
    })
    .addCase(userActions.sign_out.fulfilled, (state, action) => {
      return {
        user: {
          email: "",
          photo: "",
          _id: "",
        },
      };
    });
});

export default userReducer;
