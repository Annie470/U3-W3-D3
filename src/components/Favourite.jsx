import { Container, Row, Col } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import SingleFav from './SingleFav';
const Favourite = () => {
  const favourites = useSelector((state) => state.favourites.companies);

  return (
    <Container className='py-5 text-center'>
        <h1>Favourites</h1>
      <Row className="justify-content-center mt-5">
        {favourites.length === 0 ? (
          <Col xs={8} className="text-center mt-5">
            <h4>No favourites yet</h4>
          </Col>
        ) : (
          favourites.map((c) => (
            <SingleFav key={c._id} data={c}/>
          ))
        )}
      </Row>
    </Container>
  );
};

export default Favourite;
