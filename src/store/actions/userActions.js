import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const sign_in = createAsyncThunk(
  "sign_in",
  async (payload, { rejectWithValue }) => {
    try {
      let { email, password } = payload;
      const response = await axios.post(
        "http://localhost:3000/api/users/login",
        {
          email: email,
          password: password,
        }
      );

      localStorage.setItem("token", response.data.token);
      localStorage.setItem("user", JSON.stringify(response.data.user));

      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Logged in",
      });

      return response.data.user;
    } catch (error) {
      let errorMsgs = error.response.data.message;
      Swal.fire({
        icon: "error",
        title: "Logged Error",
        text: errorMsgs,
      });
      return rejectWithValue(
        error.message || "An error occurred during login."
      );
    }
  }
);

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
        localStorage.setItem("user", JSON.stringify(response.data.user));
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
    localStorage.removeItem("user");
    Swal.fire({
      icon: "info",
      title: "Logged out",
      text: "You have been logged out successfully.",
    });
    
    console.log();
    return {
      user: {},
      isLogged: false,
    };
  } catch (error) {
    console.log(error);
    return {
      user: {},
      token: "",
    };
  }
});

export const register_user = createAsyncThunk(
  "sign_out",
  async (userData, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        "http://localhost:3000/api/users/register",
        userData
      );
      Swal.fire({
        icon: "success",
        title: "User created",
      });
      return response.data;
    } catch (error) {
      if (error.response) {
        const errorMsgs = error.response.data.message;
        Swal.fire({
          icon: "error",
          title: "register Error",
          text: errorMsgs,
        });
        return rejectWithValue(
          errorMsgs || "An error occurred during registration."
        );
      } else {
        Swal.fire({
          icon: "error",
          title: "Network Error",
          text: "There was a network error. Please try again later.",
        });
        return rejectWithValue("Network error occurred.");
      }
    }
  }
);

const userActions = {
  sign_in,
  authenticate,
  sign_out,
  register_user,
};

export default userActions;
