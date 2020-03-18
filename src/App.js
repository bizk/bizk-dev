import React, {} from 'react';
import './App.css';
import { Container, Col, Row, Nav, Image, Button, Carousel, Card } from 'react-bootstrap';

class App extends React.Component {
  render() {
    return(
      <div>
        <Nav variant="tabs" className="justify-content-center" sticky="top">
          <Nav.Item>
            <Nav.Link>BIZK.DEV</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link>CURRICULUM</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link>PROJECTS</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link>CONTACT</Nav.Link>
          </Nav.Item>
        </Nav>
        <Image style={{maxWidth: '100%'}} src="https://picsum.photos/id/420/2024/600/?blur=2"/>
        
        <Container style={{backgroundColor: '#fcfcfc', padding:'2rem'}}>
          <h1 fluid style={{textAlign:'center'}} >Hey there!</h1>
          <Row style={{paddingTop:'1rem'}}>
            <Col sm={4}>
              <Image fluid rounded src='https://avatars2.githubusercontent.com/u/27785807?s=400&u=8ab18be43315401902d22d2b9b548f3347f54072&v=4'/>
            </Col>
            <Col sm={8}>
              <h3  style={{textAlign:'justify'}}>My name is Carlos Santiago Yanzon, I'm a Computer Engineering student in his fourth year at the Argentine Bussines University (UADE).
              I can describe myself as a very proactive and creative person, with a strong will for learning and innovation related to all science 
              fields. </h3>
            </Col>
          </Row>
          <Button style={{marginTop:'1rem'}} block> See my cv!</Button>          
        </Container>

        <Container style={{backgroundColor: '#fcfcfc', padding:'2rem'}}>
          <h1 fluid style={{textAlign:'center'}} >What I have done so far</h1>
          <Carousel style={{paddingTop:'1rem'}}>
            <Carousel.Item>
              <Row>
                <Col>
                  <Card style={{width:'20rem'}}> 
                    <Card.Img src='https://picsum.photos/id/11/40'/>
                    <Card.Body>
                      <Card.Title> Neque porro quisquam est qui,</Card.Title>
                      <Card.Text>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col>
                  <Card style={{width:'20rem'}}> 
                    <Card.Img src='https://picsum.photos/id/12/40'/>
                    <Card.Body>
                      <Card.Title> Neque porro quisquam est qui,</Card.Title>
                      <Card.Text>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col>
                  <Card style={{width:'20rem'}}> 
                    <Card.Img src='https://picsum.photos/id/13/40'/>
                    <Card.Body>
                      <Card.Title> Neque porro quisquam est qui,</Card.Title>
                      <Card.Text>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Carousel.Item>
            <Carousel.Item>
              <Row>
                <Col>
                  <Card style={{width:'20rem'}}> 
                    <Card.Img src='https://picsum.photos/id/14/40'/>
                    <Card.Body>
                      <Card.Title> Neque porro quisquam est qui,</Card.Title>
                      <Card.Text>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col>
                  <Card style={{width:'20rem'}}> 
                    <Card.Img src='https://picsum.photos/id/15/40'/>
                    <Card.Body>
                      <Card.Title> Neque porro quisquam est qui,</Card.Title>
                      <Card.Text>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col>
                  <Card style={{width:'20rem'}}> 
                    <Card.Img src='https://picsum.photos/id/16/40'/>
                    <Card.Body>
                      <Card.Title> Neque porro quisquam est qui,</Card.Title>
                      <Card.Text>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Carousel.Item>
          </Carousel>
        </Container>

      </div>
    );
  }
}



export default App;
