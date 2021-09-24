import { Link } from 'react-router-dom'
import './styles.css'

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="container" >
                <div className="inner" >
                    <div className="logo" >
                        <img src="http://qesco.themezinho.net/wp-content/uploads/2020/10/logo.png" alt="logo" />
                    </div>
                    <div className="custom-menu" >
                        <ul>
                            <li>
                                <Link to="/shipper" >Shipper</Link>
                            </li>
                            <li>
                                <Link to="/carrier" >Carrier</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="site-menu" >
                        <div>
                            <ul>
                                <li>
                                    <Link to="/logistics" >Logistics</Link>
                                </li>
                                <li>
                                    <Link to="/services" >Services</Link>
                                </li>
                                <li>
                                    <Link to="/news" >News</Link>
                                </li>
                                <li>
                                    <Link to="/about" >About</Link>
                                </li>
                                <li>
                                    <Link to="/contact" >Contact</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="hamburger-menu" >
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <div className="navbar-button" >
                        <Link to="/" >GET A QUOTE</Link>
                    </div>
                </div>
            </div>            
        </div>
    )
}

export default Navbar
