import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../Axios"; // Make sure your Axios instance is correctly set up

// Define an async thunk for login
export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (loginData, { rejectWithValue }) => {
    try {
      const response = await api.post("/user/signin", loginData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

// Load initial state from local storage
const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : {};
const userTokenFromStorage = localStorage.getItem("token")
  ? localStorage.getItem("token")
  : null;

const initialState = {
  isAuthenticated: !!userTokenFromStorage,
  loading: false,
  userInfo: userInfoFromStorage, // for user object
  userToken: userTokenFromStorage, // for storing the JWT
  error: null,
  success: false, // for monitoring the registration process.
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.isAuthenticated = false;
      state.userInfo = {};
      state.loading = false;
      state.userToken = null;
      state.error = null;
      state.success = false;
      localStorage.removeItem('userInfo');
      localStorage.removeItem('token');
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.success = false;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.userInfo = action.payload.user;
        state.userToken = action.payload.token;
        state.success = true;
        state.isAuthenticated = true;
        localStorage.setItem("userInfo", JSON.stringify(state.userInfo));
        localStorage.setItem("token", state.userToken);
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.success = false;
      });
  },
});

export const { logout } = authSlice.actions;

const authReducer = authSlice.reducer;
export default authReducer;
