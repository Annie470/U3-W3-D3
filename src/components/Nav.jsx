import { Nav } from "react-bootstrap"
import { Link } from "react-router-dom"

const Navb = ()=> {
    return(
        <>
      <Nav className=" justify-content-center  bg-info border-bottom border-black" activeKey="/home">
    <Nav.Item className="d-flex align-items-center">
          <Nav.Link as={Link} to="/" className="title fs-3 text-dark-emphasis" eventKey="link-1">
            Home
          </Nav.Link>
          <Nav.Link as={Link} to="/"  eventKey="link-1">
           <img id="logo" src="public/workielogo.png" alt="logo" className="mx-4" />
          </Nav.Link>
          <Nav.Link as={Link} to="/favourites" className="text-dark-emphasis title fs-3" eventKey="link-2">
            Favourites
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </>
    )
}
export default Navb