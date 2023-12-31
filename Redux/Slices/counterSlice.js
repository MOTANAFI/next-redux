import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 100,
}

export const CounterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
     
      state.value += 1
    },
    decrement: (state) => {
        console.log("Decrement action dispatched");
        state.value > 0 ? state.value -= 1 : state.value = 0
    },
    reset: (state) => {
        state.value = 0
    }
   
  }
})

// Action creators are generated for each case reducer function
export const { increment, decrement, reset } = CounterSlice.actions

export default CounterSlice.reducer