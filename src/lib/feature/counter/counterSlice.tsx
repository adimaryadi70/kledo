import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Define the initial state
interface CounterState {
  count: number;
}

const initialState: CounterState = {
  count: 0,
};

// Create a Redux slice
const counterSlice: any = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
    initializeCount: (state, action: PayloadAction<number>) => {
      state.count = action.payload;
    },
  },
});

// Export the actions and reducer
export const { increment, decrement, initializeCount } = counterSlice.actions;
export default counterSlice.reducer;