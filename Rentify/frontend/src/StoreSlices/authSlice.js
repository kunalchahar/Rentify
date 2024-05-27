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

const initialState = {
  isAuthenticated: false,
  loading: false,
  userInfo: {}, // for user object
  userToken: null, // for storing the JWT
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
      sessionStorage.removeItem('userInfo');
      sessionStorage.removeItem('token');
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
        console.log(action.payload);
        sessionStorage.setItem("userInfo", JSON.stringify(state.userInfo));
        sessionStorage.setItem("token", state.userToken);
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
