import { configureStore } from '@reduxjs/toolkit';
import movieSlice from '../features/movie/movieSlice'
import userSlice from '../features/user/userSlice'

const store = configureStore({
    reducer: {
       movie: movieSlice,
       user: userSlice
    }
})

export default store

