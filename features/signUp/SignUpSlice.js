import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { signupfromserver } from './SignUpApi';

export const signup = createAsyncThunk(
  'signupSlice/signup',
  async (user, thunkAPI) => {
    try {
      // Assuming you're validating the user input before sending it to the server
      // Perform input validation here if necessary

      const res = await signupfromserver(user);
      return res.data; // Assuming server returns some data upon successful signup
    } catch (error) {
      // Return the error so it can be handled in the rejected case
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const signupSlice = createSlice({
  name: 'signupSlice',
  initialState: {
    currentUser: null,
    status: "idle", // Initial status
    error: null // Initial error state
  },
  reducers: {
    // You can add additional reducers here if needed
  },
  extraReducers: (builder) => {
    builder
      .addCase(signup.pending, (state) => {
        state.status = "loading"; // Update status to loading
      })
      .addCase(signup.fulfilled, (state, action) => {
        state.status = "succeeded"; // Update status to succeeded
        state.currentUser = action.payload; // Update currentUser with the received data
        state.error = null; // Reset error state
      })
      .addCase(signup.rejected, (state, action) => {
        state.status = "failed"; // Update status to failed
        state.error = action.payload; // Update error state with the received error message
      });
  },
});

export default signupSlice.reducer;