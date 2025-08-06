import { Nav } from "react-bootstrap"
import { Link } from "react-router-dom"

const Navb = ()=> {
    return(
        <>
      <Nav className="justify-content-center bg-info border-bottom border-black" activeKey="/home">
    <Nav.Item>
          <Nav.Link as={Link} to="/" className="text-black" eventKey="link-1">
            Home
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={Link} to="/favourites" className="text-black" eventKey="link-2">
            Favourites
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </>
    )
}
export default Navb