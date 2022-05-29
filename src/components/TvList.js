import Tv from './Tv';
import { useState, useEffect, useContext } from 'react';
import { Context } from '../context/context';
import Pagination from 'react-bootstrap/Pagination';
export default function TvList() {
  const [series, setSeries] = useState([]);
  const { page, setPage } = useContext(Context);
  const getSeries = async () => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_SERVER}/tv?page=${page}`
      );
      const data = await response.json();
      setSeries(data);
    } catch (error) {
      console.log('error ', error);
    }
  };
  function updateSeries(newSeries, id) {
    let updates = series.map((tv) => {
      if (tv.id == id) {
        tv.comment = newSeries.comment;
        return tv;
      } else {
        return tv;
      }
    });
    setSeries(updates);
  }
  useEffect(() => {
    getSeries();
  }, [page]);
  return (
    <>
      <h1 style={{ marginBottom: '8px' }} className='home-heading'>
        Trending Series
      </h1>

      <div className='movie-container'>
        {series.map((tv) => {
          return <Tv key={tv.id} tv={tv} updateSeries={updateSeries} />;
        })}
      </div>
      <Pagination className='pages-container'>
        <div style={{ display: 'flex' }}>
          <Pagination.First
            onClick={(e) => {
              setPage(1);
              getSeries();
            }}
          />
          <Pagination.Prev
            disabled={page === 1}
            onClick={(e) => {
              setPage(page - 1);
              getSeries();
            }}
          ></Pagination.Prev>
        </div>
        <Pagination.Next
          onClick={(e) => {
            setPage(page + 1);
            getSeries();
          }}
        />
      </Pagination>
    </>
  );
}
