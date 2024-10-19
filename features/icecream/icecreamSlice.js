import { createSlice } from "@reduxjs/toolkit"


const icecreamSlice = createSlice({
    name: 'icecream',
    initialState: {
        numOfIcecreams : 20,
        loading: false,
    },
    reducers: {
        ordered: (state) => {
            state.numOfIcecreams--
        }, 
        restocked: (state, action) => {
            state.numOfIcecreams += action.numOfIcecreams
        },
    }
})

export default icecreamSlice.reducer
export const icecreamActions = icecreamSlice.actions