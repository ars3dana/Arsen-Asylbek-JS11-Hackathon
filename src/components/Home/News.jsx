import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme =>({
 border:{
   width: '900px',
   margin: '0 auto',
   border: '10px solid black'
 }
}))
const News = () => {
  const classes = useStyles()
    return (
        <Carousel className={classes.border}>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            src='https://static.dw.com/image/15894995_303.jpg'
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            className="d-block w-100"
            src="https://static.dw.com/image/15894995_303.jpg"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://static.dw.com/image/15894995_303.jpg"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
};

export default News;