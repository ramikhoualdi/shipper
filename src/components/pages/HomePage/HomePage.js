import './styles.css'
import Topbar from '../../sections/Topbar/Topbar'
import Navbar from '../../sections/Navbar/Navbar'
import Footer from '../../sections/Footer/Footer'
import CarouselSection from '../../sections/Carousel/Carousel'

const  HomePage = () => {
    return (
        <div>
            <Topbar />
            <Navbar />
            <CarouselSection />
            <Footer />
        </div>
    )
}

export default HomePage
