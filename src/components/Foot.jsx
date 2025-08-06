import { Container, Row } from "react-bootstrap";

const Foot = () => {
  return (
    <>
      <Container fluid className="bg-info border-top border-black">
        <Row className="text-end me-5 p-2">
          <p className="title fs-3 text-dark-emphasis m-0">Workie &copy;{new Date().getFullYear()}</p>
        </Row>
      </Container>
    </>
  );
};
export default Foot;
