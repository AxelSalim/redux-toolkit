import { createSlice } from "@reduxjs/toolkit"

const cakeSlice = createSlice({
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

export default cakeSlice.reducer
export const cakeActions = cakeSlice.actions