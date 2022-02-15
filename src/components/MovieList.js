
import Movie from "./Movie";

export default function MovieList(props) {
  return (
    <>
    <div className="movie-container">
      {props.movies.map((movie) => {
        return <Movie key={movie.id} movie={movie} />;
      })}
      </div>
    </>
  );
}
