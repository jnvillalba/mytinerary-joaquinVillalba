import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const sign_in = createAsyncThunk("sign_in", async (payload) => {
  try {
    let { email, password } = payload;
    const user = await axios
      .post("http://localhost:3000/api/users/login", {
        email: email,
        password: password,
      })
      .then((response) => {
        localStorage.setItem("token", response.data.token);
        console.log("logged in");
        return response.data.user;
      });
  } catch (error) {
    error.response.data.message.forEach((message) => console.log(message));
  }
});

const authenticate = createAsyncThunk("authenticate", async () => {
  try {
    let token = localStorage.getItem("token");
    let user = await axios
      .post("http://localhost:3000/api/users/authenticated", null, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        console.log("authenticated");
        localStorage.setItem("token", response.data.token);
        return response.data.user;
      });

    return {
      user: user,
    };
  } catch (error) {
    console.log(error);
  }
});

const sign_out = createAsyncThunk("sign_out", async () => {
  try {
    let token = localStorage.getItem("token");
    let authorization = { headers: { Authorization: `Bearer ${token}` } };
    let data = await axios.post(
      "http://localhost:3000/api/users/logout",
      null,
      authorization
    );

    localStorage.removeItem("token");
    console.log("logged out");
    return {
      user: {},
      token: "",
    };
  } catch (error) {
    console.log(error);
    return {
      user: {},
      token: "",
    };
  }
});

 const register_user = createAsyncThunk("sign_out", async (userData) => {
  try {
    axios.post("http://localhost:3000/api/users/register", userData)
      .then((response) => {
        console.log("User created:", response);
      })
    } catch (error) {
      console.log(error);
    }
  }
);

const userActions = {
  sign_in,
  authenticate,
  sign_out,
  register_user
};

export default userActions;
