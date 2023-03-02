import { configureStore, createSlice } from '@reduxjs/toolkit'

const initialState = {
    weather: {},
}

const meteoSlice = createSlice({
    name: "weather",
    initialState,
    reducers: {
        storeWeather(state, action){
            state.weather = {...action.payload}
        }
    }
})

const store = configureStore({
    reducer: meteoSlice.reducer
})

export const {storeWeather} = meteoSlice.actions
export default store