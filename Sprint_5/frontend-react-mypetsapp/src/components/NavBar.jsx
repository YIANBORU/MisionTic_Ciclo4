import React from 'react'
import { Container, Nav, Navbar} from 'react-bootstrap'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        
<Navbar bg="light" expand="lg">
  <Container fluid>
    <Navbar.Brand href="./">My PetsApp</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: 'auto' }}
        navbarScroll
      >
        <Nav.Link><Link className="nav-link" to="/">Inicio</Link></Nav.Link>
        <Nav.Link><Link className="nav-link" to="/owners">Dueños</Link></Nav.Link>
        <Nav.Link><Link className="nav-link" to="/pets">Mascotas</Link></Nav.Link>
        {/* <NavDropdown className="nav-link" title="Registrar" id="navbarScrollingDropdown">
          <NavDropdown.Item><RegisterOwner /></NavDropdown.Item>
          <NavDropdown.Item><RegisterPet /></NavDropdown.Item>
        </NavDropdown> */}
        <Nav.Link ><Link className="nav-link" to="/contacto">Contacto</Link></Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>

        
    )
}

export default NavBar
