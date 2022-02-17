import { Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
export default function Navbar() {
  return (
    <>
      <Nav variant="pills" defaultActiveKey="/home">
        <div className="nav-container">
          <div className="nav-items">
            {" "}
            <Nav.Item>
              <LinkContainer to="/">
                <Nav.Link eventKey={1}>Home</Nav.Link>
              </LinkContainer>{" "}
            </Nav.Item>
            <Nav.Item>
              <LinkContainer to="/tv">
                <Nav.Link eventKey={3}>Series</Nav.Link>
              </LinkContainer>
            </Nav.Item>
            <Nav.Item>
              <LinkContainer to="/favorite">
                <Nav.Link eventKey={2}>Favorites</Nav.Link>
              </LinkContainer>
            </Nav.Item>
          </div>
          <h1 className={"page-heading"}>My Movies App</h1>
        </div>
      </Nav>
    </>
  );
}
