import React from 'react';
import Slider from 'react-slick';
import { useSelector } from 'react-redux';
import { getAllMovies,getAllShows } from '../../features/movies/movieSlice';
import MovieCard from '../MovieCard/MovieCard';
import { settings } from '../../common/settings';
import "./MovieListing.scss"
export default function MovieListing() {
  const movies = useSelector(getAllMovies);
  const Shows=useSelector(getAllShows);
  let renderMovies,renderShows = "";

  renderMovies = movies.Response === "True" ? (
    movies.Search.map((movie, index) => (
      <MovieCard key={index} data={movie}></MovieCard>
    ))
  ) : (
    <div className="movies-error">
      <h3>{movies.Error}</h3>
    </div>
  );
  renderShows = Shows.Response === "True" ? (
    Shows.Search.map((movie, index) => (
      <MovieCard key={index} data={movie}></MovieCard>
    ))
  ) : (
    <div className="movies-error">
      <h3>{Shows.Error}</h3>
    </div>
  );
  return (
    <>
      <div className="movie-wrapper">
        <div className="movie-list">
          <h2> Movies</h2>
          <div className="movie-container">
            <Slider {...settings}>{renderMovies}</Slider></div>
        </div>
        <div className="show-list">
          <h2>shows</h2>
          <div className="movie-container">
            <Slider {...settings} >{renderShows}</Slider>
          </div>
        </div>
      </div>
    </>
  );
}
