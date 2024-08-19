import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import CardPizza from "./CardPizza";
import Header from './Header'

const Home = () => {
    return(
        <>
        <Header />
        <Container>
        <Row className="mt-4">
                <Col>
                    <CardPizza 
                    nombre="Napolitana"  
                    precio="5950" 
                    ingredientes='mozzarella , tomates, jamón, orégano'
                    imagen="https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fpizza-1239077_640_cl.jpg?alt=media&token=6a9a33da-5c00-49d4-9080-784dcc87ec2c"/>
                </Col>
                <Col>
                    <CardPizza 
                    nombre="Española"  
                    precio="6950" 
                    ingredientes='mozzarella, gorgonzola, parmesano, provolone' imagen="https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fcheese-164872_640_com.jpg?alt=media&token=18b2b821-4d0d-43f2-a1c6-8c57bc388fab"/>
                </Col>
                <Col>
                    <CardPizza 
                    nombre="Pepperoni" 
                    precio="6950" 
                    ingredientes='mozzarella, pepperoni, orégano' 
                    imagen="https://www.sortirambnens.com/wp-content/uploads/2019/02/pizza-de-peperoni.jpg"/>
                </Col>
            </Row>
        </Container>
        </>
    )
}


export default Home