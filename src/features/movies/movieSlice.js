import { createAsyncThunk, createSlice, } from "@reduxjs/toolkit";
import movieApi from '../../common/apis/movieApi'
import {APIKey} from '../../common/apis/MovieApiKey'

export const fetchAsyncMovies = createAsyncThunk(
    "movies/fetchAsyncMovies",
    async (term) => {
      // const movieText = "Harry";
      const response = await movieApi.get(
        `?apiKey=${APIKey}&s=${term}&type=movie`
      );
      return response.data;
    }
  );

  export const fetchAsyncShows = createAsyncThunk(
    "movies/fetchAsyncShows",
    async (term) => {
      // const showText = "Friends";
      const response = await movieApi.get(
        `?apiKey=${APIKey}&s=${term}&type=series`
      );
      return response.data;
    }
  );  
  
export const fetchAsyncMoviesorShowDetail = createAsyncThunk(
    "movies/fetchAsyncMoviesorShowDetail",
    async (id) => {
      const response = await movieApi.get(
        `?apiKey=${APIKey}&t}&i=${id}&Plot=full`
      );
      return response.data;
    }
  );
const initialState={
    movies:{},
    Shows:{},
    slectedMovie:{}

}

const movieSlice=createSlice({
    name:"movies",
    initialState,
    reducers:{
        // addMovies:(state,{payload})=>{
        //     state.movies = payload;
        // },
        removeSelectedMovieOrShow:(state)=>{
          state.getSelectedMoviesorShow=[]
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchAsyncMovies.pending, (state, action) => {
                console.log("Pending");
            })
            .addCase(fetchAsyncMovies.fulfilled, (state, { payload }) => {
                console.log("Fetched Successfully");
                state.movies = payload;
            })

            .addCase(fetchAsyncMovies.rejected, (state, { payload }) => {
                console.log("Rejected");
            })
            .addCase(fetchAsyncShows.fulfilled, (state, { payload }) => {
                console.log("Fetched Successfully");
                state.Shows = payload;
            })
            .addCase(fetchAsyncMoviesorShowDetail.fulfilled, (state, { payload }) => {
                console.log("Fetched Successfully");
                state.slectedMovie = payload;
            });
    },
})

// export const {addMovies}=movieSlice.actions;
export const {removeSelectedMovieOrShow}=movieSlice.actions;
export const getAllMovies=(state)=>state.movies.movies;
export const getAllShows=(state)=>state.movies.Shows;
export const getSelectedMoviesorShow=(state)=>state.movies.slectedMovie
export default movieSlice.reducer;
