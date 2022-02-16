import Modal from "react-bootstrap/Modal";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { useRef } from "react";
import Swal from "sweetalert2";


export default function ModalMovie(props) {

  const commentRef= useRef()
  console.log(commentRef)

  
  function handleComment(e) {
    e.preventDefault();
    console.log(commentRef)
    const comment = commentRef.current.value;
     console.log(commentRef.current.value);
    const newMovie = { ...props.chosenMovie, comment };
    props.updateMovies(newMovie, props.chosenMovie.id);
}

async function handleAddFav(e, movie){
  e.preventDefault();
 const dataToBeSent = {
  title: movie.title,
  release_date: movie.release_date,
  poster_path: movie.poster_path,
  overview: movie.overview,
  comment: movie.comment
 }

 const url = `${process.env.REACT_APP_SERVER}/addMovie`;
 const response = await fetch(url, {
     method: 'POST',
     headers: {
         'Content-Type': 'application/json'
       },
       body: JSON.stringify(dataToBeSent)
 })
 const data = await response.json();

 Swal.fire( "Movie Deleted Successfully", `Added ${movie.title} to favorite `, "success");
}

  
  return (
    <>
      <Modal
        show={props.show}
        onHide={props.handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>{props.chosenMovie.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img
            style={{ width: "100%", height: "100%" }}
            src={`https://image.tmdb.org/t/p/w500${props.chosenMovie.poster_path}`}
            alt={props.chosenMovie.title}
          />
          <p>user comment: {props.chosenMovie.comment}</p>
          <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Add a comment</Form.Label>
            <Form.Control ref={commentRef} type="text" placeholder="comment goes here" />
            <Button variant="primary" type="submit" onClick={handleComment}>
              Submit
            </Button>
            <Button type="submit" variant="primary" onClick={(e)=>{handleAddFav(e,props.chosenMovie)} }>add to favorite</Button>
          </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.handleClose}>
            Close
          </Button>

        </Modal.Footer>
      </Modal>
    </>
  );
}
