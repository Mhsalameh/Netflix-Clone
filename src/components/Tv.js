import Card from 'react-bootstrap/Card';
import { Button } from 'react-bootstrap';
import { useState } from 'react';
import ModalTv from './ModalTv';
import { Badge } from 'react-bootstrap';
export default function Tv(props) {
  // console.log(props.tv)
  const tv = props.tv;
  const [readMore, setReadMore] = useState(true);
  const [show, setShow] = useState(false);
  const [chosenTv, setChosenTv] = useState();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function toggleReadMore() {
    setReadMore(!readMore);
  }

  function handleShowModal(tvData) {
    console.log(tvData);
    handleShow();
    setChosenTv(tvData);
  }

  return (
    <>
      <Card style={{ width: '18rem', backgroundColor: '#000000' }}>
        <Card.Img
          variant='top'
          src={`https://image.tmdb.org/t/p/w500${tv.poster_path}`}
        />
        <Card.Body>
          <Card.Title style={{ color: '#EEEEEE' }}>
            {' '}
            {tv.original_name}{' '}
            <Badge pill className='title-bg' bg='dark'>
              {tv.first_air_date}
            </Badge>{' '}
          </Card.Title>
          <Card.Text style={{ color: '#EEEEEE' }}>
            {readMore ? tv.overview.slice(0, 95) : tv.overview}
            <span
              style={{ color: '#C84B31', fontSize: 'smaller' }}
              onClick={toggleReadMore}
            >
              {readMore ? '...more' : ' less'}
            </span>
          </Card.Text>
          <Button
            style={{ backgroundColor: '#2D4263' }}
            variant='primary'
            onClick={() => {
              handleShowModal(tv);
            }}
          >
            Add to favorites
          </Button>
        </Card.Body>
      </Card>
      {chosenTv && (
        <ModalTv
          show={show}
          handleClose={handleClose}
          chosenTv={chosenTv}
          updateSeries={props.updateSeries}
        />
      )}
    </>
  );
}
