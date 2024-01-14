import React from "react";
import { MovieList } from "../../componentsIndex";
import { useSelector } from "react-redux";

const SecondryTvContainer = () => {
  const movies = useSelector((store) => store.movies);
  const popular = useSelector((store) => store.popularMovies);
  const topRated = useSelector((store) => store.topRatedMovies);
  const upcoming = useSelector((store) => store.upcomingMovies);

  return (
    <div className="bg-black">
      <div className="-mt-80 relative z-20">
        <br />
        <MovieList title={"Now Playing"} movies={movies.NowPlaying} />
        <MovieList title={"Top Rated"} movies={topRated.TopRatedMovies} />
        <MovieList title={"Upcoming"} movies={upcoming.UpcomingMovies} />
        <MovieList title={"Popular"} movies={popular.PopularMovies} />
      </div>
    </div>
  );
};

export default SecondryTvContainer;
