import {
  Navbar as NavbarBootstrap,
  Nav,
  Container,
  Image,
} from "react-bootstrap";

import IconCart from "../icons/cart.svg";

export default function Navbar({ countCart }) {
  return (
    <>
      <NavbarBootstrap bg="dark" variant="dark" expand="lg">
        <Container>
          <NavbarBootstrap.Brand href="">React-Bootstrap</NavbarBootstrap.Brand>
          <NavbarBootstrap.Toggle aria-controls="basic-navbar-nav" />
          <NavbarBootstrap.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="">Home</Nav.Link>
              <Nav.Link href="">About</Nav.Link>
            </Nav>
            <div>
              <Image src={IconCart} /> &nbsp;
              <span style={{ color: "white", fontWeight: "bold" }}>
                ({countCart})
              </span>
            </div>
          </NavbarBootstrap.Collapse>
        </Container>
      </NavbarBootstrap>
    </>
  );
}
