import { Container, Row } from "react-bootstrap";

const Foot = () => {
  return (
    <>
      <Container fluid className="bg-info">
        <Row className="text-end me-5 p-2">
          <p className="title fs-3 text-dark-emphasis m-0">Workie &copy;{new Date().getFullYear}</p>
        </Row>
      </Container>
    </>
  );
};
export default Foot;
