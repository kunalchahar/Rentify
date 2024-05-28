import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../Axios"; // Make sure your Axios instance is correctly set up

// Define an async thunk for adding a property
export const addProperty = createAsyncThunk(
  "property/addProperty",
  async (propertyData, { rejectWithValue }) => {
    console.log(propertyData)
    try {
      const response = await api.post("/properties/addProperty", propertyData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

// Define an async thunk for fetching all properties
export const getAllProperties = createAsyncThunk(
  "property/getAllProperties",
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.get("/properties/properties");
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

// Define an async thunk for fetching properties by seller ID
export const getPropertyBySeller = createAsyncThunk(
    "property/getPropertyBySeller",
    async (sellerId, { rejectWithValue }) => {
      try {
        const response = await api.get(`/properties/property?sellerId=${sellerId}`);
        return response.data;
      } catch (error) {
        return rejectWithValue(error.response.data.message);
      }
    }
  );
  

const initialState = {
  properties: [],
  loading: false,
  error: null,
  success: false,
};

const propertySlice = createSlice({
  name: "property",
  initialState,
  reducers: {
    clearError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // addProperty
      .addCase(addProperty.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.success = false;
      })
      .addCase(addProperty.fulfilled, (state, action) => {
        state.loading = false;
        state.properties.push(action.payload);
        state.success = true;
      })
      .addCase(addProperty.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.success = false;
      })
      // getAllProperties
      .addCase(getAllProperties.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.success = false;
      })
      .addCase(getAllProperties.fulfilled, (state, action) => {
        state.loading = false;
        state.properties = action.payload;
        state.success = true;
      })
      .addCase(getAllProperties.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.success = false;
      })
      // getPropertyBySeller
      .addCase(getPropertyBySeller.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.success = false;
      })
      .addCase(getPropertyBySeller.fulfilled, (state, action) => {
        state.loading = false;
        state.properties = action.payload;
        state.success = true;
      })
      .addCase(getPropertyBySeller.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.success = false;
      });
  },
});

export const { clearError } = propertySlice.actions;

const propertyReducer = propertySlice.reducer;
export default propertyReducer;
