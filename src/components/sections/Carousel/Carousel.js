import './styles.css'
import Carousel  from 'react-bootstrap/Carousel'

const CarouselSection = () => {
    return (
        <div className='carousel'>
            <Carousel>
                <Carousel.Item interval={5000}>
                    <img
                        // className="d-block w-100 "
                        src="http://qesco.themezinho.net/wp-content/uploads/2020/10/slide01.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={5000}>
                    <img
                        // className="d-block w-100"
                        src="http://qesco.themezinho.net/wp-content/uploads/2020/10/slide02.jpg"
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={5000}>
                    <img
                        // className="d-block w-100"
                        src="http://qesco.themezinho.net/wp-content/uploads/2020/10/slide03.jpg"
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default CarouselSection
