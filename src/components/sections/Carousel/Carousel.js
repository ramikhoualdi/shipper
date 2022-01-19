import "./styles.css";
import Carousel from "react-bootstrap/Carousel";
import { Link } from "react-router-dom";

const CarouselSection = () => {
  return (
    <div className="carousel">
      <Carousel>
        <Carousel.Item interval={5000}>
          <img
            // className="d-block w-100 "
            src={process.env.PUBLIC_URL + "/images/slide01.jpg"}
            alt="First slide"
          />
          <Carousel.Caption>
            <div className="container container_carousel">
              <h1>
                Transport <br />
                Logistics
              </h1>
              <p>
                Take the complexity out of customs Freight Solutions
                <br />
                with customs brokerage services
              </p>
              <Link to="/"> DISCOVER ALL</Link>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={5000}>
          <img
            // classNameName="d-block w-100"
            src={process.env.PUBLIC_URL + "/images/slide02.jpg"}
            alt="Second slide"
          />
          <Carousel.Caption>
            <div className="container container_carousel">
              <h1>
                Quickest & Safe <br />
                Delivery
              </h1>
              <p>
                Take the complexity out of customs Freight Solutions
                <br />
                with customs brokerage services
              </p>
              <Link to="/"> DISCOVER ALL</Link>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={5000}>
          <img
            // classNameName="d-block w-100"
            src={process.env.PUBLIC_URL + "/images/slide03.jpg"}
            alt="Third slide"
          />
          <Carousel.Caption>
            <div className="container container_carousel">
              <h1>
                Allways <br />
                Trustable
              </h1>
              <p>
                Take the complexity out of customs Freight Solutions
                <br />
                with customs brokerage services
              </p>
              <Link to="/"> DISCOVER ALL</Link>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default CarouselSection;
