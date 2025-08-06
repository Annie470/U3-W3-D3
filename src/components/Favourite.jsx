import { Container, Row, Col } from 'react-bootstrap';
import { useSelector } from 'react-redux';

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
            <Col key={c._id} xs={8} className="text-center mb-4 p-3 border rounded">
              <h3>{c.title}</h3>
              <p>{c.company_name}</p>
              <p>
                {c.category} –{' '}
                {new Date(c.publication_date).toISOString().slice(0, 10)}
              </p>
            </Col>
          ))
        )}
      </Row>
    </Container>
  );
};

export default Favourite;
