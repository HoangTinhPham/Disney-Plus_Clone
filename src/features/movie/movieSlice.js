import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    popular: [],
    hollywood: [],
    newTo: [],
    kidsTv: [],
    original: [],
    trending: [],
}

const moiveSlice = createSlice({
    name: 'movie',
    initialState,
    reducers: {
        setMovies: (state, action) => {
            state.popular = action.payload.popular;
            state.hollywood = action.payload.hollywood;
            state.newTo = action.payload.newTo;
            state.kidsTv = action.payload.kidsTv;
            state.original = action.payload.original;
            state.trending = action.payload.trending;
        }
    }
})


const { actions, reducer } = moiveSlice;
export const { setMovies } = actions;
export default reducer;