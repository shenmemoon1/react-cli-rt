import { createSlice } from "@reduxjs/toolkit";

// Define the initial state for the counter
const initialState = {
  value: 1, // Initial value of the counter
  status: "idle", // Initial status of the counter (e.g., "idle")
};

// Create a Redux slice for the counter
export const counterSlice = createSlice({
  name: "counter", // Name of the slice
  initialState, // Initial state for the slice
  reducers: {
    increment: (state) => {
      // Increment the value in the state by 1
      state.value += 1;
    },
  },
});

// Export action creators
export const { increment } = counterSlice.actions;

// Export a selector to access the counter value from the state
export const selectCounter = (state) => state.counter.value;

// Export the reducer for the counter slice
export default counterSlice.reducer;
