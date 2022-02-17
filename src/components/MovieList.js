import Movie from "./Movie";

export default function MovieList(props) {
  return (
    <>
        <h1 style={{marginBottom:"8px"}} className="home-heading">Trending Movies</h1>

    <div className="movie-container">
      {props.movies.map((movie) => {
        return <Movie key={movie.id} movie={movie} updateMovies={props.updateMovies} />;
      })}
      </div>
    </>
  );
}
