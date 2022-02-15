import Modal from "react-bootstrap/Modal";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";

export default function ModalMovie(props) {
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
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Add a comment</Form.Label>
            <Form.Control type="text" placeholder="comment goes here" />
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.handleClose}>
            Close
          </Button>

          <Button variant="primary">add to favorite</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
