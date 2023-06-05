import { createSlice } from '@reduxjs/toolkit'

const initialState = {
carData:[]
}

const carSlice = createSlice({
  name: "car",
  initialState,
  reducers: {
    CAR_DATA(state,action){
        state.carData = action.payload.carData
        console.log(action.payload.carData)
    }
  }
});

export const {CAR_DATA} = carSlice.actions
export const selectCarData = (state) => state.car.carData

export default carSlice.reducer