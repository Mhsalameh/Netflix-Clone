import { useState, useEffect } from "react";
import MovieList from "./MovieList";

export default function Home() {
  const [movie, setMovie] = useState();
  const getTrending = async () => {
    try {
      const response = await fetch(`${process.env.REACT_APP_SERVER}/trending`);
      const data = await response.json();
      setMovie(data);
    } catch (error) {
      console.log("error ", error);
    }
  };
  useEffect(() => {
    getTrending();
  },[]);

  return (

    <>
      <h2 className={"home-heading"}>Trending Movies</h2>
        {movie &&  <MovieList movies={movie}/>}
    </>
  );
}
