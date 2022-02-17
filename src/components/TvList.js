import Tv from "./Tv";

export default function TvList(props) {
    console.log(props);
  return (
    <>
        <h1 style={{marginBottom:"8px"}} className="home-heading">Trending Series</h1>

    <div className="movie-container">
      {props.series.map((tv) => {
        return <Tv key={tv.id} tv={tv} updateSeries={props.updateSeries} />;
      })}
      </div>
    </>
  );
}
