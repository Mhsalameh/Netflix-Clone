import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Home from "./components/Home";
import FavList from "./components/FavList";
import Navbar from "./components/Navbar";
import NotFound from "./components/NotFound";
import TvList from "./components/TvList";
import {useState, useEffect} from "react"




function App() {
  const [series, setSeries] = useState();

  const getSeries = async () => {
    try {
      const response = await fetch(`${process.env.REACT_APP_SERVER}/tv`);
      const data = await response.json();
      setSeries(data);
    } catch (error) {
      console.log("error ", error);
    }
  };
  function updateSeries(newSeries,id){
    let updates=series.map(tv=>{
      if(tv.id==id){
        tv.comment=newSeries.comment;
        return tv
      }
      else {
        return tv
      }
    })
    setSeries(updates);
  
  }
  useEffect(() => {
    getSeries();
  }, []);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favorite" element={<FavList />} />
        <Route path="/tv" element={series && <TvList series={series} updateSeries={updateSeries} />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
