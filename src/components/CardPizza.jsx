import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import PropTypes from 'prop-types';


const CardPizza = ({nombre, ingredientes, precio, imagen}) => {
  return (
    <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={imagen} />
        <Card.Body>
            <Card.Title>{nombre}</Card.Title>
        </Card.Body>
        <ListGroup className="list-group-flush">
            <ListGroup.Item>
                <Card.Text style={{fontSize:'15px',color:'gray'}}>
                    INGREDIENTES:
                </Card.Text>
                <Card.Text>
                🍕{ingredientes}
                </Card.Text>
            </ListGroup.Item>
            <ListGroup.Item>
                <Card.Title style={{fontSize:'20px', fontWeight:'bold', padding:'10px'}}>Precio: $ {precio}</Card.Title>
                <Card.Link href="#" className=''>  <Button variant="outline-dark" style={{fontSize:'10px'}} >Ver más 👀 </Button></Card.Link>
                <Card.Link href="#"  className=''>  <Button variant="dark" style={{fontSize:'10px'}}>Añadir 🛒 </Button></Card.Link>
            </ListGroup.Item>
        </ListGroup>
    </Card>
  )
}

CardPizza.propTypes = {
    imagen: PropTypes.string.isRequired,
    nombre: PropTypes.string.isRequired,
    precio: PropTypes.number.isRequired,
    ingredientes: PropTypes.arrayOf(PropTypes.string).isRequired,
  }

export default CardPizza