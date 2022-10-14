import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    movies: [],
}

const moiveSlice = createSlice({
    name: 'movie',
    initialState,
    reducers: {
        setMovies: (state, action) => {
            state.movies = action.payload;
        }
    }
})


const { actions, reducer } = moiveSlice;
export const { setMovies } = actions;
export default reducer;