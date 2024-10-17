import { createSlice } from "@reduxjs/toolkit";


export const cakeSlice = createSlice({
    name: 'cake',
    initialState: {
        numOfCakes: 10,
        loading: false,
    },
    reducers: {
        ordered: (state) => {
            state.numOfCakes--
        },
        restocked: (state, action) => {
            state.numOfCakes += action.payload
        }
    }
})


export const { loading, ordered, restocked } = cakeSlice.actions
export default cakeSlice.reducer