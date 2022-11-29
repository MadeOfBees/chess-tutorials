import React from 'react';
// import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import "../App.css";
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 7
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 4
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 3
  }
};

const Home = () => {
  return (
    <Container>
      <main>
        <Row>
          <Col></Col>
          <Col xs={6}>
            <h1 className="titleScreen">Welcome to our site!</h1>
          </Col>
          <Col></Col>
        </Row>
        <p> Etiam vitae aliquet dui, eget pharetra ex. Suspendisse feugiat tincidunt aliquam. Aenean vitae mauris erat. Nam id lorem scelerisque, vulputate felis vitae, ultrices nulla. Suspendisse ac risus eros. Sed fermentum leo a est rhoncus, sed efficitur dui porta. Cras vitae lacus et nulla pretium volutpat. Nullam rutrum volutpat leo a semper. In finibus ex vitae felis bibendum ultrices. Pellentesque est erat, malesuada et accumsan a, suscipit ut eros. Morbi tincidunt accumsan tellus, eget placerat mi mollis quis. Cras malesuada nibh vel lorem ornare, eu convallis nunc imperdiet. Sed euismod ligula ut est scelerisque, id faucibus nisi ullamcorper. Cras maximus nibh vel consequat auctor. Pellentesque nec turpis ac purus dignissim vehicula vitae et nulla. </p>
      </main>
      <div className='hueyLewis'>
        <Row>
          <Col></Col>
          <Col xs={6}>
            <h1>News:</h1>
          </Col>
          <Col></Col>
        </Row>
        <Carousel responsive={responsive} centerMode={true}>
          <div><div className="hipToBeRectangle">Item 1</div></div>
          <div><div className="hipToBeRectangle">Item 2</div></div>
          <div><div className="hipToBeRectangle">Item 3</div></div>
          <div><div className="hipToBeRectangle">Item 4</div></div>
          <div><div className="hipToBeRectangle">Item 5</div></div>
          <div><div className="hipToBeRectangle">Item 6</div></div>
          <div><div className="hipToBeRectangle">Item 7</div></div>
          <div><div className="hipToBeRectangle">Item 8</div></div>
          <div><div className="hipToBeRectangle">Item 9</div></div>
          <div><div className="hipToBeRectangle">Item 10</div></div>
          <div><div className="hipToBeRectangle">Item 11</div></div>
          <div><div className="hipToBeRectangle">Item 12</div></div>
          <div><div className="hipToBeRectangle">Item 13</div></div>
          <div><div className="hipToBeRectangle">Item 14</div></div>
          <div><div className="hipToBeRectangle">Item 15</div></div>
          <div><div className="hipToBeRectangle">Item 16</div></div>
          <div><div className="hipToBeRectangle">Item 17</div></div>
          <div><div className="hipToBeRectangle">Item 18</div></div>
        </Carousel>
      </div>
    </Container>
  );
};

export default Home;
