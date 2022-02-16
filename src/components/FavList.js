import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Swal from 'sweetalert2';
import {useEffect, useState} from 'react';

export default function FavList(props) {
  
    const [favListData, setFavListData] = useState();

  async function getDataFromDB() {
    const response = await fetch(`${process.env.REACT_APP_SERVER}/getMovies`);
    const data = await response.json();
    setFavListData(data);
    console.log(data)
  }
  useEffect(() => {
    getDataFromDB();
  }, []);

  async function handleDelete(id) {
    const response = await fetch(
      `${process.env.REACT_APP_SERVER}/DELETE/${id}`,
      {
        method: "DELETE",
      }
    );

    if (response.status === 204) {
      getDataFromDB();
      Swal.fire("It is done!", "Movie Deleted Successfully", "success");
    }
  }

    return(
<>
<h1 className="home-heading">My Favorite Movies</h1>

<div className='fav-container'>
    {favListData && favListData.map(movie=>{
        console.log(movie)
        return ( 
    
      <Card key={movie.id} style={{ width: "18rem", backgroundColor: "#000000" }} >
        <Card.Img
          variant="top"
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        />
        <Card.Body>
          <Card.Title style={{color:"#EEEEEE"}}> {movie.title}  </Card.Title>
          <Card.Text style={{color:"#EEEEEE"}}>
                            {`Comment: ${movie.comment}`}
          </Card.Text>
          <Button style={{backgroundColor:"#2D4263", }}
            variant="primary"
            onClick={() => {
                handleDelete(movie.id);
              }}
          >
            Remove Item
          </Button>
        </Card.Body>
      </Card>
  )
        })}
        </div>
         </>
        )
    }

