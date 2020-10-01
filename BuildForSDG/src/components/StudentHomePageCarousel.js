import React, {useState} from "react";
import Carousel from 'react-bootstrap/Carousel';
import "../css/StudentHomePageCarousel.scss";

//import ControlledCarousel from "reactstrap";
function StudentHomePageCarousel(){
    const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel className="carousel" activeIndex={index} onSelect={handleSelect} >
      <Carousel.Item className="carouselItem">
        <img
          className="slideImage"
          src="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg"
          alt="First slide"
        />
        <Carousel.Caption className="carousel-caption">
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="carouselItem">
      <img
          className="slideImage"
          src=""
          alt="First slide"
        />
        <Carousel.Caption className="carousel-caption">
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="carouselItem">
        <img
          className="slideImage"
          src="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg"
          alt="Third slide"
        />

        <Carousel.Caption className="carousel-caption">
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

//render(<ControlledCarousel />);
export default StudentHomePageCarousel;