import { useState, useEffect } from "react";
import MovieList from "./MovieList";

export default function Home() {
  const [movies, setMovies] = useState();
  const getTrending = async () => {
    try {
      const response = await fetch(`${process.env.REACT_APP_SERVER}/trending`);
      const data = await response.json();
      setMovies(data);
    } catch (error) {
      console.log("error ", error);
    }
  };


  function updateMovies(newMovie,id){
    let updates=movies.map(movie=>{
      if(movie.id==id){
        movie.comment=newMovie.comment;
        return movie
      }
      else {
        return movie
      }
    })
    setMovies(updates);

  }
  useEffect(() => {
    getTrending();
  }, []);

  return <>{movies && <MovieList movies={movies} updateMovies={updateMovies} />}</>;
}
