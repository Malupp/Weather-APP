import { configureStore, createSlice } from '@reduxjs/toolkit'

const initialState = {
    weather: {},
    weekly: []
}

const meteoSlice = createSlice({
    name: "weather",
    initialState,
    reducers: {
        storeWeather(state, action){
            state.weather = {...action.payload}
        },
        storeWeekly(state, action){
            state.weekly = action.payload;
        }
    }
})

const store = configureStore({
    reducer: meteoSlice.reducer
})

export const {storeWeather, storeWeekly} = meteoSlice.actions
export default store