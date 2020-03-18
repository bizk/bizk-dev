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
            <Carousel.Item style={{marginBottom: '1rem'}}>
              <Row>
                <Col>
                  <ProjectCard image="https://picsum.photos/id/11/30" title="PROJECT 1" description="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium."/>
                </Col>
                <Col>
                  <ProjectCard image="https://picsum.photos/id/12/40" title="PROJECT 2" description="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium."/>
                </Col>
                <Col>
                  <ProjectCard image="https://picsum.photos/id/13/40" title="PROJECT 3" description="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium."/>
                </Col>
              </Row>
            </Carousel.Item>
            <Carousel.Item style={{marginBottom: '1rem'}}>
              <Row>
                <Col>
                  <ProjectCard image="https://picsum.photos/id/14/40" title="PROJECT 4" description="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium."/>
                </Col>
                <Col>
                  <ProjectCard image="https://picsum.photos/id/15/40" title="PROJECT 5" description="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium."/>
                </Col>
                <Col>
                  <ProjectCard image="https://picsum.photos/id/16/40" title="PROJECT 6" description="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium."/>
                </Col>
              </Row>
            </Carousel.Item>
          </Carousel>
        </Container>

        <Container fluid style={{paddingTop: '2rem', backgroundColor: '#353535', color:'#fff'}}>
          <h1 fluid style={{textAlign:'center'}}>Woah! thanks for your time!</h1>
          <h4 fluid style={{textAlign:'center'}}>If you landed over here I appreciate a whole lot your time,</h4>
          <h4 fluid style={{textAlign:'center'}}>It would be awesome to stay in touch! Feel free to contact me at any time trough my social media.</h4>
        </Container>
      </div>
    );
  }
}

class ProjectCard extends React.Component {

  render() {
    return(
      <Card style={{width:'20rem', boxShadow: '5px 5px 15px grey'}}> 
        <Card.Img fluid src={this.props.image}/>
        <Card.Body>
          <Card.Title>{this.props.title}</Card.Title>
          <Card.Text>{this.props.description}</Card.Text>
        </Card.Body>
      </Card>
    );
  } 
}


export default App;
