 import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from "react-router-dom"

const Navb = ()=> {
    return(
<>
  <Navbar expand="md" bg="info" variant="light" className="border-bottom border-black">
    <Container className="justify-content-center">
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mx-auto d-flex align-items-center">
          <Nav.Link as={Link} to="/" className="title fs-3 text-dark-emphasis" eventKey="link-1">
            Home
          </Nav.Link>

          <Nav.Link as={Link} to="/" eventKey="link-1">
            <img id="logo" src="public/workielogo.png" alt="logo" className="mx-4" />
          </Nav.Link>

          <Nav.Link as={Link} to="/favourites" className="text-dark-emphasis title fs-3" eventKey="link-2">
            Favourites
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
</>

    )
}
export default Navb