import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavScrollExample() {
  return (
    <Navbar sticky="top" collapseOnSelect expand="lg" style={{backgroundColor: '#495057'}}>
      <Container fluid >
        <Navbar.Brand href="#" style={{color: 'white'}}>Weather Zone</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" style={{backgroundColor: 'white'}}/>
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1" style={{color: 'white'}}>Current Weather</Nav.Link>
            <Nav.Link href="#action2" style={{color: 'white'}}>More about today's Weather</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;