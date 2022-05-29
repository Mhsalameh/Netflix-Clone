import Modal from 'react-bootstrap/Modal';
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { useRef } from 'react';
import Swal from 'sweetalert2';

export default function ModalTv(props) {
  console.log(props);
  const commentRef = useRef();
  console.log(commentRef);

  function handleComment(e) {
    e.preventDefault();
    console.log(commentRef);
    const comment = commentRef.current.value;
    console.log(commentRef.current.value);
    const newTv = { ...props.chosenTv, comment };
    props.updateSeries(newTv, props.chosenTv.id);
  }

  async function handleAddFav(e, tv) {
    e.preventDefault();
    const dataToBeSent = {
      title: tv.original_name,
      release_date: tv.first_air_date,
      poster_path: tv.poster_path,
      overview: tv.overview,
      comment: tv.comment,
    };

    const url = `${process.env.REACT_APP_SERVER}/addMovie`;
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(dataToBeSent),
    });
    const data = await response.json();
    console.log(data);
    Swal.fire(
      'Tv series added Successfully',
      `Added ${tv.original_name} to favorite `,
      'success'
    );
  }

  return (
    <>
      <Modal
        show={props.show}
        onHide={props.handleClose}
        backdrop='static'
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>{props.chosenTv.original_name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img
            style={{ width: '100%', height: '100%' }}
            src={`https://image.tmdb.org/t/p/w500${props.chosenTv.poster_path}`}
            alt={props.chosenTv.original_name}
          />
          <p>
            user comment:{' '}
            {props.chosenTv.comment
              ? 'no comment added'
              : props.chosenTv.comment}
          </p>
          <Form>
            <Form.Group className='mb-3' controlId='formBasicEmail'>
              <Form.Label>Add a comment</Form.Label>
              <Form.Control
                ref={commentRef}
                type='text'
                placeholder='comment goes here'
              />
              <div className='modal-btn'>
                <Button variant='primary' type='submit' onClick={handleComment}>
                  Submit
                </Button>
                <Button
                  type='submit'
                  variant='primary'
                  onClick={(e) => {
                    handleAddFav(e, props.chosenTv);
                  }}
                >
                  add to favorite
                </Button>
              </div>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={props.handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
