import React, { Row, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { Button } from "react-bootstrap";
import { useState } from "react";
import ModalMovie from './ModalMovie.js'

export default function Movie(props) {
  // console.log(props.movie)
  const movie = props.movie;
  const [readMore, setReadMore] = useState(true);
  const [show, setShow] = useState(false);
  const [chosenMovie, setChosenMovie] = useState();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function toggleReadMore() {
    setReadMore(!readMore);
  }

  function handleShowModal(movieData) {
    console.log(movieData);
    handleShow();
    setChosenMovie(movieData);
  }
  return (
    <>
      <Card style={{ width: "18rem", backgroundColor: "#000000" }}>
        <Card.Img
          variant="top"
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        />
        <Card.Body>
          <Card.Title style={{color:"#EEEEEE"}}> {movie.title}  </Card.Title>
          <Card.Text style={{color:"#EEEEEE"}}>
            {readMore ? movie.overview.slice(0, 95) : movie.overview}
            <span style={{color:"#C84B31" , fontSize:"smaller"}} onClick={toggleReadMore}>
              {readMore ? "...more" : " less"}
            </span>
          </Card.Text>
          <Button style={{backgroundColor:"#2D4263", }}
            variant="primary"
            onClick={() => {
              handleShowModal(movie);
            }}
          >
            Add to favorites
          </Button>
        </Card.Body>
      </Card>
      {chosenMovie && (
        <ModalMovie
          show={show}
          handleClose={handleClose}
          chosenMovie={chosenMovie}
        />
      )}
    </>
  );
}
