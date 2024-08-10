import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const  Navegacion = () => {
    const total = 25000;
    const token = true;
    const buttonStyle = {fontSize:'10px'}
  return (
    <Navbar bg="dark" data-bs-theme="dark">
        <Container>
            <Navbar.Brand href="#home" className="text-white">Pizzería Mamma Mia!</Navbar.Brand>
            <Nav className="me-auto " >
                <Nav.Link href="#home" ><Button className="p-2" variant="outline-light" style={buttonStyle}> 🍕 Home</Button> </Nav.Link>
                {token ?
                <Nav.Link href="#Login" ><Button className= {token == true ? 'log': null} variant="outline-light" style={buttonStyle}>🔒 Login </Button>
                </Nav.Link>:
                <Nav.Link href="#Profile" ><Button className= {token == false ? 'log': null} variant="outline-light" style={buttonStyle}>🔒 Profile</Button>
                </Nav.Link>}
                {token ?
                <Nav.Link href="#Register" ><Button className= {token == true ? 'log': null}  variant="outline-light" style={buttonStyle}>🔒 Register</Button>
                </Nav.Link>:
                <Nav.Link href="#Logout" ><Button className= {token == false ? 'log': null} variant="outline-light" style={buttonStyle}>🔒 Logout </Button>
                </Nav.Link>}
            </Nav>
        </Container>
            <Form className="p-2 ms-auto">
                <Button variant="outline-info" style={buttonStyle}> 🛒 Total: ${total.toLocaleString()}</Button>
            </Form>
    </Navbar>
  )
}

export default Navegacion