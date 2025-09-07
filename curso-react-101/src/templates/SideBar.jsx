import { useState } from "react";
import { Button, Offcanvas, Nav } from "react-bootstrap";




function Sidebar() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow} className="m-3">
        Abrir menú
      </Button>

      <Offcanvas show={show} onHide={handleClose} backdrop="static">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Menú lateral</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="flex-column">
            <Nav.Link href="/">Inicio</Nav.Link>
            <Nav.Link href="/perfil">Perfil</Nav.Link>
            <Nav.Link href="/likes">Likes</Nav.Link>
            <Nav.Link href="/hooks">Hooks</Nav.Link>
            <Nav.Link href="/post">Post</Nav.Link>
            <Nav.Link href="/login">Login</Nav.Link>
            <Nav.Link href="/lista">Lista</Nav.Link>
            </Nav>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Sidebar;